import { createAsyncThunk } from "@reduxjs/toolkit";

import { syncCart } from "../../api/cartApi";

import {
registerUser,
getProfile,
sendLoginOtp,
verifyLoginOtp,
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
"auth/send-login-otp",


async (
  credentials: {
    email: string;
    password: string;
  }
) => {

  await sendLoginOtp(
    credentials
  );

  return {
    email:
      credentials.email,
  };

}

);

export const verifyLoginOtpThunk =
createAsyncThunk(
"auth/verify-login-otp",

async (
  data: {
    email: string;
    otp: string;
  }
) => {

  const response =
    await verifyLoginOtp(
      data.email,
      data.otp
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

  return response;

}


);

export const getProfileThunk =
createAsyncThunk(
"auth/profile",


async () => {

  return await getProfile();

}


);

