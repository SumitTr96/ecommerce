import api from "./axios";

import type {
  Product,
  CreateProductRequest,
  UpdateProductRequest,
} from "../types/product";

export const getProducts =
  async (): Promise<Product[]> => {

    const response =
      await api.get(
        "/products"
      );

    return response.data;
  };

export const getProduct =
  async (
    id: string
  ): Promise<Product> => {

    const response =
      await api.get(
        `/products/${id}`
      );

    return response.data;
  };

export const createProduct =
  async (
    data:
      CreateProductRequest
  ): Promise<Product> => {

    const response =
      await api.post(
        "/products",
        data
      );

    return response.data;
  };

export const updateProduct =
  async (
    id: string,
    data:
      UpdateProductRequest
  ): Promise<Product> => {

    const response =
      await api.put(
        `/products/${id}`,
        data
      );

    return response.data;
  };

export const deleteProduct =
  async (
    id: string
  ): Promise<void> => {

    await api.delete(
      `/products/${id}`
    );
  };