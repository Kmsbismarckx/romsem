import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './reducers/goodsSlice';
import categoriesReducer from './reducers/categoriesSlice';
import cartReducer from './reducers/cartSlice';

const store = configureStore({
  reducer: { categories: categoriesReducer, goods: goodsReducer, cart: cartReducer },
});

export default store;
