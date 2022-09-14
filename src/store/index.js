import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { foodReducer } from "./reducers/foodReduser";
import { goodsReducer } from "./reducers/goodsReducer";

const rootReducer = combineReducers({ foodReducer, goodsReducer });

export const store = configureStore({ reducer: rootReducer });
