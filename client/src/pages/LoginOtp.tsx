import {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  useAppDispatch,
} from "../hooks/reduxHooks";

import {
  verifyLoginOtpThunk,
} from "../features/auth/authThunk";

function LoginOtp() {

  const dispatch =
    useAppDispatch();

  const navigate =
    useNavigate();

  const [otp, setOtp] =
    useState("");

  const email =
    localStorage.getItem(
      "loginEmail"
    );

  const handleVerify =
    async () => {

      if (!email)
        return;

      await dispatch(
        verifyLoginOtpThunk({
          email,
          otp,
        })
      ).unwrap();

      localStorage.removeItem(
        "loginEmail"
      );

      navigate(
        "/products"
      );

    };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-2xl font-bold">
          Login OTP
        </h1>

        <input
          value={otp}
          onChange={(e) =>
            setOtp(
              e.target.value
            )
          }
          className="border p-3 mt-4 w-full"
          placeholder="Enter OTP"
        />

        <button
          onClick={
            handleVerify
          }
          className="bg-indigo-600 text-white px-6 py-3 mt-4 rounded"
        >
          Verify OTP
        </button>

      </div>

    </div>
  );
}

export default LoginOtp;