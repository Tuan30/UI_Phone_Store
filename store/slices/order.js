import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import OrderService from "../../services/order";

export const fetchAsyncOrder = createAsyncThunk(
  "auth/fetchAsyncOrder",
  async (data, thunkAPI) => {
    const respone = await OrderService.order(data);
    return respone.data;
  }
);

const orderSlice = createSlice({
  name: "Order",
  initialState: {
    order: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncOrder.fulfilled, (state, action) => {
        state.order = action.payload
      })
  },
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
