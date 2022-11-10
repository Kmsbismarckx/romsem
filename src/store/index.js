import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './reducers/goodsSlice';
import categoriesReducer from './reducers/categoriesSlice';
import cartReducer from './reducers/cartSlice';
import usersReducer from './reducers/usersSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    goods: goodsReducer,
    cart: cartReducer,
    users: usersReducer,
  },
});

export default store;
