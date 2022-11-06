import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

const cart = JSON.parse(localStorage.getItem('cart')) || {};

const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem(state, action) {
      const { id } = action.payload;
      const existingBasketItem = state.entities;
      if (existingBasketItem[id]) {
        cartAdapter.upsertOne(state, { id, quantity: existingBasketItem[id].quantity + 1 });
      } else {
        cartAdapter.addOne(state, { id, quantity: 1 });
      }
    },
    deleteCartItem: cartAdapter.removeOne,
    increaseQuantity(state, action) {
      const existingBasketItem = state.entities[action.payload];
      existingBasketItem.quantity += 1;
    },
  },
});

export default cartSlice.reducer;

export const { setCartItem, deleteCartItem, increaseQuantity } = cartSlice.actions;

export const {
  selectAll: selectAllCartItems,
  selectById: selectCartItemById,
  selectIds: selectCartItemIds,
} = cartAdapter.getSelectors((state) => state.cart);
