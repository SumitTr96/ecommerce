import { createSlice } from "@reduxjs/toolkit";

import { fetchOrdersThunk, fetchOrderThunk } from "./orderThunk";

import type { Order } from "../../types/order";
interface OrderState {
  orders: Order[];

  selectedOrder: Order | null;

  loading: boolean;

  error: string | null;
}

const initialState: OrderState = {
  orders: [],

  selectedOrder: null,

  loading: false,

  error: null,
};

const orderSlice = createSlice({
  name: "order",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchOrdersThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchOrdersThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.orders = action.payload;
      })

      .addCase(fetchOrderThunk.fulfilled, (state, action) => {
        state.selectedOrder = action.payload;
      });
  },
});

export default orderSlice.reducer;
