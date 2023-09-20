import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../redux/operations/getDataSlice'
export const store = configureStore({
    reducer:{
        data:dataReducer,
    }
})