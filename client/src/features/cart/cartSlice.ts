import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import type { CartItem } from "../../types/cart";

const storedCart =
  localStorage.getItem("cart");

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: storedCart
    ? JSON.parse(storedCart)
    : [],
};

const saveCart = (
  items: CartItem[]
) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(items)
  );
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (
      state,
      action: PayloadAction<CartItem>
    ) => {
      const existingItem =
        state.items.find(
          (item) =>
            item._id ===
            action.payload._id
        );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCart(state.items);
    },

    removeFromCart: (
      state,
      action: PayloadAction<string>
    ) => {
      state.items =
        state.items.filter(
          (item) =>
            item._id !==
            action.payload
        );

      saveCart(state.items);
    },

    increaseQuantity: (
      state,
      action: PayloadAction<string>
    ) => {
      const item =
        state.items.find(
          (item) =>
            item._id ===
            action.payload
        );

      if (item) {
        item.quantity += 1;
      }

      saveCart(state.items);
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<string>
    ) => {
      const item =
        state.items.find(
          (item) =>
            item._id ===
            action.payload
        );

      if (
        item &&
        item.quantity > 1
      ) {
        item.quantity -= 1;
      }

      saveCart(state.items);
    },

    clearCart: (
      state
    ) => {
      state.items = [];

      localStorage.removeItem(
        "cart"
      );
    },

    replaceCart: (
      state,
      action: PayloadAction<
        CartItem[]
      >
    ) => {
      state.items =
        action.payload;

      saveCart(state.items);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  replaceCart,
} = cartSlice.actions;

export default cartSlice.reducer;