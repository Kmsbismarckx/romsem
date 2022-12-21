import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { selectAllGoods, selectGoodPrice } from './goodsSlice';

const cart = JSON.parse(localStorage.getItem('cart'));

const cartAdapter = createEntityAdapter();
const initialState = cart || cartAdapter.getInitialState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem(state, action) {
      const { id } = action.payload;
      const existingBasketItem = state.entities[id];

      if (existingBasketItem) {
        cartAdapter.upsertOne(state, { id, quantity: existingBasketItem.quantity + 1 });
      } else {
        cartAdapter.addOne(state, { id, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    deleteCartItem: cartAdapter.removeOne,
    increaseQuantity(state, action) {
      const { id } = action.payload;

      const existingBasketItem = state.entities[id];

      if (existingBasketItem.quantity) {
        cartAdapter.upsertOne(state, { id, quantity: existingBasketItem.quantity + 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;

      const existingBasketItem = state.entities[id];

      if (existingBasketItem.quantity > 1) {
        cartAdapter.upsertOne(state, { id, quantity: existingBasketItem.quantity - 1 });
      } else {
        cartAdapter.removeOne(state, id);
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;

export const { setCartItem, deleteCartItem, increaseQuantity, decreaseQuantity, totalPrice } =
  cartSlice.actions;

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemIds,
} = cartAdapter.getSelectors((state) => state.cart);
export const selectCartItemQuantity = (state, id) => state.cart.entities[id].quantity;
export const selectTotalPrice = createSelector(
  [selectCartItemIds, selectAllCartItems, selectAllGoods],
  (cartIds, cartEntities, goods) => {
    const goodsPriceInCart = cartIds.map((id) => {
      const goodInCart = Object.values(goods).find((good) => good.id === id);
      const quantityInCart = Object.values(cartEntities).find((quantity) => quantity.id === id);
      if (goodInCart) {
        return goodInCart.price * goodInCart.pieces * quantityInCart.quantity;
      }
      return 0;
    });
    return goodsPriceInCart.reduce((prev, curr) => prev + curr, 0);
  }
);
export const selectCartItemTotalPrice = createSelector(
  [selectCartItemById, selectGoodPrice],
  (cartItem, cartItemPrice) => cartItem.quantity * cartItemPrice
);
