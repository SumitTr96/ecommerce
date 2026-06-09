import { createSlice } from "@reduxjs/toolkit";

import type { User } from "../../types/user";

import { loginThunk, getProfileThunk, verifyLoginOtpThunk } from "./authThunk";

interface AuthState {
  user: User | null;

  loading: boolean;

  error: string | null;

  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,

  loading: true,

  error: null,

  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;

      state.isAuthenticated = false;

      state.loading = false;

      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(loginThunk.pending, (state) => {
        state.loading = true;

        state.error = null;
      })

      .addCase(loginThunk.fulfilled, (state) => {
        state.loading = false;
      })

      .addCase(loginThunk.rejected, (state) => {
        state.loading = false;

        state.error = "Login Failed";

        state.user = null;

        state.isAuthenticated = false;
      })

      .addCase(getProfileThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(getProfileThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload.user;

        state.isAuthenticated = true;
      })

      .addCase(verifyLoginOtpThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload.user;

        state.isAuthenticated = true;
      })
      .addCase(verifyLoginOtpThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyLoginOtpThunk.rejected, (state) => {
        state.loading = false;

        state.user = null;

        state.isAuthenticated = false;
      })

      .addCase(getProfileThunk.rejected, (state) => {
        state.loading = false;

        state.user = null;

        state.isAuthenticated = false;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
