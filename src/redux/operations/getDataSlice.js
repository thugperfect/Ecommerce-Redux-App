import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  data: [],
  error: "",
};
export const fetchDataApi = createAsyncThunk("data/fetchData", async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    const d = data.products;
    return d;
  } catch (error) {
    return error.message;
  }
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataApi.pending, (state) => {
        state.isLoading = true;
        state.data = [];
        state.error = "";
      })
      .addCase(fetchDataApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(fetchDataApi.rejected, (state, action) => {
        state.isLoading = false;
        state.data = [];
        state.error = action.payload;
      });
  },
});

export default dataSlice.reducer;
