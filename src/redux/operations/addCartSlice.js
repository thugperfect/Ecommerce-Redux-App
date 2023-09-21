import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartSlice: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state,action) =>{
     return state.filter(k => (k.id !== action.payload))
    }
  },
});

export const { addToCartSlice,removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
