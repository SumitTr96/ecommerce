import {
  createSlice,
} from "@reduxjs/toolkit";

import type { Product } from "../../types/product";

import {
  fetchProductsThunk,
  fetchProductThunk,
} from "./productThunk";

interface ProductState {
  products: Product[];

  product: Product | null;

  loading: boolean;

  error: string | null;
}

const initialState: ProductState = {
  products: [],

  product: null,

  loading: false,

  error: null,
};

const productSlice =
  createSlice({
    name: "product",

    initialState,

    reducers: {},

    extraReducers:
      (builder) => {

        builder

          .addCase(
            fetchProductsThunk.pending,
            (
              state
            ) => {
              state.loading =
                true;
            }
          )

          .addCase(
            fetchProductsThunk.fulfilled,
            (
              state,
              action
            ) => {

              state.loading =
                false;

              state.products =
                action.payload;
            }
          )

          .addCase(
            fetchProductsThunk.rejected,
            (
              state
            ) => {

              state.loading =
                false;

              state.error =
                "Failed to fetch products";
            }
          )

          .addCase(
            fetchProductThunk.fulfilled,
            (
              state,
              action
            ) => {

              state.product =
                action.payload;
            }
          );
      },
  });

export default
productSlice.reducer;