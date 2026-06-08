import { createAsyncThunk } from "@reduxjs/toolkit";

import { syncCart } from "../../api/cartApi";

import {
  loginUser,
  registerUser,
} from "../../api/authApi";

import {
  getProfile,
} from "../../api/authApi";

import type {
  RegisterFormData,
} from "../../utils/registerSchema";

export const registerThunk =
  createAsyncThunk(
    "auth/register",

    async (
      data: RegisterFormData
    ) => {
      return await registerUser(
        data
      );
    }
  );

export const loginThunk =
  createAsyncThunk(
    "auth/login",

    async (
      credentials: {
        email: string;
        password: string;
      }
    ) => {

      const loginResponse =
        await loginUser(
          credentials
        );

      const guestCart =
        JSON.parse(
          localStorage.getItem(
            "cart"
          ) || "[]"
        );

      if (
        guestCart.length > 0
      ) {

        await syncCart({
          items:
            guestCart.map(
              (
                item: {
                  _id: string;
                  quantity: number;
                }
              ) => ({
                product:
                  item._id,

                quantity:
                  item.quantity,
              })
            ),
        });

        localStorage.removeItem(
          "cart"
        );
      }

      return loginResponse;
    }
  );

  export const getProfileThunk =
  createAsyncThunk(
    "auth/profile",

    async () => {

      return await getProfile();

    }
  );