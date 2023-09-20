import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading:true,
    data:[],
    error:''
}



export const dataSlice = createSlice({
    name:'data',
    initialState,
    reducers:{
        fetchDataRequest:(state,action)=>{
            state.isLoading = true,
            state.data =[]
            state.error = ""
        },
        fetchDataSuccess:(state,action)=>{
            state.isLoading = false,
            state.data = action.payload
            state.error = ''
        },
        fetchDataFailure:(state,action)=>{
            state.isLoading = false,
            state.data = [],
            state.error = action.payload
        }

    }
})

export const fetchData = createAsyncThunk('data/fetchData',async ()=>{
    try {
        const res = axios.get('https://dummyjson.com/products?limit=100')
        .then(res=>{
            return res.data.products
        })
    } catch (error) {
        return error
    }
})