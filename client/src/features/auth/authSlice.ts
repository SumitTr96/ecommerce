import {
  createSlice,
} from "@reduxjs/toolkit";

import type { User } from "../../types/user";

import {
  loginThunk,
} from "./authThunk";

interface AuthState {
  user: User | null;

  loading: boolean;

  error: string | null;

  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,

  loading: false,

  error: null,

  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;

      state.isAuthenticated =
        false;
    },
  },

  extraReducers: (
    builder
  ) => {
    builder

      .addCase(
        loginThunk.pending,
        (state) => {
          state.loading = true;
        }
      )

      .addCase(
        loginThunk.fulfilled,
        (state, action) => {
          state.loading = false;

          state.user =
            action.payload.user;

          state.isAuthenticated =
            true;
        }
      )

      .addCase(
        loginThunk.rejected,
        (state) => {
          state.loading = false;

          state.error =
            "Login Failed";
        }
      );
  },
});

export const {
  logout,
} = authSlice.actions;

export default authSlice.reducer;