import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../api/productApi";

import type {
  Product,
  CreateProductRequest,
  UpdateProductRequest,
} from "../../types/product";

export const fetchProductsThunk = createAsyncThunk<Product[]>(
  "products/fetchAll",

  async () => {
    return await getProducts();
  },
);

export const fetchProductThunk = createAsyncThunk<Product, string>(
  "products/fetchOne",

  async (id) => {
    return await getProduct(id);
  },
);

export const createProductThunk = createAsyncThunk<
  Product,
  CreateProductRequest
>(
  "products/create",

  async (data) => {
    return await createProduct(data);
  },
);

export const updateProductThunk = createAsyncThunk<
  Product,
  {
    id: string;

    data: UpdateProductRequest;
  }
>(
  "products/update",

  async ({ id, data }) => {
    return await updateProduct(id, data);
  },
);

export const deleteProductThunk = createAsyncThunk<void, string>(
  "products/delete",

  async (id) => {
    return await deleteProduct(id);
  },
);
