import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import orderReducer from "../features/order/orderSlice";
import productReducer from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
