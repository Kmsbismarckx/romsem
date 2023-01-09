import { createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';
import { selectAllGoods, selectGoodPrice } from './goodsSlice';
import { selectAdditionalPrice, selectAllAdditional } from './additionalSlice';

const cart = JSON.parse(localStorage.getItem('cart'));

const cartAdapter = createEntityAdapter();
const initialState = cart || cartAdapter.getInitialState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem(state, action) {
      const { id, type } = action.payload;
      const existingBasketItem = state.entities[id];
      if (existingBasketItem) {
        cartAdapter.upsertOne(state, { id, quantity: existingBasketItem.quantity + 1 });
      } else {
        cartAdapter.addOne(state, { id, quantity: 1, type });
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

      if (existingBasketItem.quantity && existingBasketItem.quantity > 1) {
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
  [selectCartItemIds, selectAllCartItems, selectAllGoods, selectAllAdditional],
  (cartIds, cartEntities, goods, additional) => {
    const goodsPriceInCart = cartIds.map((id) => {
      const goodInCart = Object.values(goods).find((good) => good.id === id);
      const goodInCartPrice = goodInCart ? goodInCart.price * goodInCart.pieces : 0;

      const additionalInCart = Object.values(additional).find((item) => item.id === id);
      const additionalInCartPrice = additionalInCart?.price || 0;

      const quantityInCart = Object.values(cartEntities).find((quantity) => quantity.id === id);
      const quantityInCartQuantity = quantityInCart?.quantity || 0;

      return (goodInCartPrice + additionalInCartPrice) * quantityInCartQuantity;
    });
    return goodsPriceInCart.reduce((prev, curr) => prev + curr, 0);
  }
);
export const selectCartItemTotalPrice = createSelector(
  [selectCartItemById, selectGoodPrice, selectAdditionalPrice],
  (cartItem, cartGoodPrice, cartAdditionalPrice) =>
    cartItem.type === 'additional'
      ? cartAdditionalPrice * cartItem.quantity
      : cartGoodPrice * cartItem.quantity
);

export const selectCartItemType = (state, id) => state.cart.entities[id].type;
