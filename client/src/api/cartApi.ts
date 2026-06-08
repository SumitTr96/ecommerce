
import api from "./axios";

export const syncCart =
  async (
    data: {
      items: {
        product: string;
        quantity: number;
      }[];
    }
  ) => {

    const response =
      await api.post(
        "/cart/sync",
        data
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