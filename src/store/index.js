import { configureStore, combineReducers } from '@reduxjs/toolkit';
import goodsReducer from './reducers/goodsReducer';
import categoryReducer from './reducers/categoryReduser';

const rootReducer = combineReducers({ categoryReducer, goodsReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
