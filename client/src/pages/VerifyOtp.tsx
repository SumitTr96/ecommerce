import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import { verifyOtp } from "../api/authApi";

function VerifyOtp() {
  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleVerify = async () => {
    try {
      setLoading(true);

      setError("");

      await verifyOtp(email, otp);

      navigate("/login");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Verification failed");
      } else {
        setError("Verification failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-slate-800">
          Verify OTP
        </h1>

        <p className="mt-3 text-center text-slate-500">
          Enter the OTP sent to your email
        </p>

        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          placeholder="Enter OTP"
          className="
          mt-8
          w-full
          rounded-xl
          border
          border-slate-300
          px-4
          py-3
          text-center
          text-2xl
          tracking-[0.5rem]
          outline-none
          focus:border-indigo-500
          focus:ring-4
          focus:ring-indigo-100
          "
        />

        {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleVerify}
          disabled={loading}
          className="
          w-full
          mt-6
          rounded-xl
          bg-indigo-600
          py-3
          font-semibold
          text-white
          hover:bg-indigo-700
          transition
          "
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
}

export default VerifyOtp;
