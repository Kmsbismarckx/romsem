import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './reducers/goodsSlice';
import categoriesReducer from './reducers/categoriesSlice';
import cartReducer from './reducers/cartSlice';
import usersReducer from './reducers/usersSlice';
import additionalReducer from './reducers/additionalSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    goods: goodsReducer,
    cart: cartReducer,
    users: usersReducer,
    additional: additionalReducer,
  },
});

export default store;
