import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const cart = JSON.parse(localStorage.getItem('cart')) || {};

const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState({ totalPrice: 0 });

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem(state, action) {
      const { id, goodPrice } = action.payload;
      const existingBasketItem = state.entities[id];

      if (existingBasketItem) {
        cartAdapter.upsertOne(state, { id, quantity: existingBasketItem.quantity + 1 });
      } else {
        cartAdapter.addOne(state, { id, quantity: 1 });
      }
      state.totalPrice += goodPrice;
    },
    deleteCartItem: cartAdapter.removeOne,
    increaseQuantity(state, action) {
      const { id, goodPrice } = action.payload;

      const existingBasketItem = state.entities[id];

      if (existingBasketItem.quantity) {
        cartAdapter.upsertOne(state, { id, quantity: existingBasketItem.quantity + 1 });
        state.totalPrice += goodPrice;
      }
    },
    decreaseQuantity(state, action) {
      const { id, goodPrice } = action.payload;

      const existingBasketItem = state.entities[id];

      if (existingBasketItem.quantity > 1) {
        cartAdapter.upsertOne(state, { id, quantity: existingBasketItem.quantity - 1 });
        state.totalPrice -= goodPrice;
      } else {
        cartAdapter.removeOne(state, id);
        state.totalPrice = 0;
      }
    },
  },
});

export default cartSlice.reducer;

export const { setCartItem, deleteCartItem, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemIds,
} = cartAdapter.getSelectors((state) => state.cart);

export const selectCartItemQuantity = (state, id) => state.cart.entities[id].quantity;
export const totalCartPrice = (state) => state.cart.totalPrice;

// export const selectCartItemQuantities = createSelector(
//   [selectCartItemIds, selectAllCartItems],
//   (ids, items) => ids.map((item, index) => items[index].quantity)
// );
