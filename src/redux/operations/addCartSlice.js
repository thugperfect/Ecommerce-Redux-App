import { createSlice } from "@reduxjs/toolkit"
const initialState =[

]

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCartSlice:(state,action)=>{
        
            state.push(action.payload)
        },
      
    }
})

export const {addToCartSlice}  = cartSlice.actions

export default cartSlice.reducer