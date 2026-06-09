import express from "express";

import {
  register,
  login,
  verifyOtp,
  getMe,
  logout,
  sendLoginOtp,
  verifyLoginOtp,
} from "../controllers/authController";

import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.post("/verify-otp", verifyOtp);

router.get("/me", protect, getMe);

router.post("/logout", logout);

router.post("/send-login-otp", sendLoginOtp);

router.post("/verify-login-otp", verifyLoginOtp);

export default router;
