import api from "./axios";

import type { Order, CreateOrderRequest } from "../types/order";

export const createOrder = async (
  orderData: CreateOrderRequest,
): Promise<Order> => {
  const response = await api.post("/orders", orderData);

  return response.data;
};

export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get("/orders");

  return response.data;
};

export const getOrder = async (id: string): Promise<Order> => {
  const response = await api.get(`/orders/${id}`);

  return response.data;
};
