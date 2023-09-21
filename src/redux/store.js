import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../redux/operations/getDataSlice'
import cartReducer from '../redux/operations/addCartSlice'
export const store = configureStore({
    reducer:{
        data:dataReducer,
        cart:cartReducer,
    }
})