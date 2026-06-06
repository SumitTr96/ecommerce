import type { CartItem } from "../types/cart";
import api from "./axios";

export const syncCart =
  async (
    items: CartItem
  ) => {
    const response =
      await api.post(
        "/cart/sync",
        {
          items,
        }
      ); 

    return response.data;
  };

export const getCart =
  async () => {
    const response =
      await api.get(
        "/cart"
      );

    return response.data;
  };