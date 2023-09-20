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

export const {fetchDataRequest,fetchDataSuccess,fetchDataFailure} = dataSlice.actions
export const fetchData = createAsyncThunk('data/fetchData',async (dispatch)=>{
    dispatch(fetchDataRequest())
    try {
        axios.get('https://dummyjson.com/products?limit=100')
        .then(res=>{
            const d = res.data.products
            dispatch(fetchDataSuccess(d))
        })
       
    } catch (error) {
       dispatch(fetchDataFailure(error.message))
    }
})

export default dataSlice.reducer