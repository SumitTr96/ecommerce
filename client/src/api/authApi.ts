import api from "./axios";

export const registerUser = async (
  userData: {
    name: string;
    email: string;
    password: string;
  }
) => {
  const response = await api.post(
    "/auth/register",
    userData
  );

  return response.data;
};

export const verifyOtp = async (
  email: string,
  otp: string
) => {
  const response = await api.post(
    "/auth/verify-otp",
    {
      email,
      otp,
    }
  );

  return response.data;
};

export const loginUser = async (
  credentials: {
    email: string;
    password: string;
  }
) => {
  const response = await api.post(
    "/auth/login",
    credentials
  );

  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post(
    "/auth/logout"
  );

  return response.data;
};

export const getProfile = async () => {
  const response = await api.get(
    "/auth/me"
  );

  return response.data;
};

export const sendLoginOtp =
  async (
    credentials: {
      email: string;
      password: string;
    }
  ) => {

    const response =
      await api.post(
        "/auth/send-login-otp",
        credentials
      );

    return response.data;

  };

  export const verifyLoginOtp =
  async (
    email: string,
    otp: string
  ) => {

    const response =
      await api.post(
        "/auth/verify-login-otp",
        {
          email,
          otp,
        }
      );

    return response.data;

  };