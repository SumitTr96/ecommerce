import {
  createAsyncThunk,
} from "@reduxjs/toolkit";

import {
  createOrder,
  getOrders,
  getOrder,
} from "../../api/orderApi";

import type {
  Order,
  CreateOrderRequest,
} from "../../types/order";

export const createOrderThunk =
  createAsyncThunk<
    Order,
    CreateOrderRequest
  >(
    "order/create",

    async (
      orderData
    ) => {
      return await createOrder(
        orderData
      );
    }
  );

export const fetchOrdersThunk =
  createAsyncThunk<
    Order[]
  >(
    "order/fetchAll",

    async () => {
      return await getOrders();
    }
  );

export const fetchOrderThunk =
  createAsyncThunk<
    Order,
    string
  >(
    "order/fetchOne",

    async (
      id
    ) => {
      return await getOrder(
        id
      );
    }
  );