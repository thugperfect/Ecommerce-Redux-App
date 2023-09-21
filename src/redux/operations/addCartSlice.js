import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartSlice: (state, action) => {
     const present = state.find(k=> k.id === action.payload.id)
      if(!present){
        state.push(action.payload);
      }
    },
    removeFromCart: (state,action) =>{
     return state.filter(k => (k.id !== action.payload))
    }
  },
});

export const { addToCartSlice,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
