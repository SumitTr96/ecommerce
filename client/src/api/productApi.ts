import api from "./axios";

import type {
  Product,
  CreateProductRequest,
  UpdateProductRequest,
} from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get("/products");

  return response.data;
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await api.get(`/products/${id}`);

  return response.data;
};

export const createProduct = async (
  data: CreateProductRequest,
): Promise<Product> => {
  const formData = new FormData();

  formData.append("name", data.name);

  formData.append("description", data.description);

  formData.append("category", data.category);

  formData.append("price", String(data.price));

  formData.append("stock", String(data.stock));

  formData.append("image", data.image[0]);

  const response = await api.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const updateProduct = async (
  id: string,
  data: UpdateProductRequest,
): Promise<Product> => {
  const response = await api.put(`/products/${id}`, data);

  return response.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete(`/products/${id}`);
};
