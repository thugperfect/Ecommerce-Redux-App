import { configureStore,combineReducers } from "@reduxjs/toolkit";
import dataReducer from '../redux/operations/getDataSlice'
import cartReducer from '../redux/operations/addCartSlice'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer,
  });
  
export const store = configureStore({
    reducer:rootReducer,
    middleware:[thunk],
})