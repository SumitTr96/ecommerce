import express from "express";

import {
  register,
  login,
  verifyOtp,
  getMe,
  logout,
} from "../controllers/authController";

import {
  protect,
} from "../middleware/authMiddleware";

const router =
  express.Router();

router.post(
  "/register",
  register
);

router.post(
  "/login",
  login
);

router.post(
  "/verify-otp",
  verifyOtp
);

router.get(
  "/me",
  protect,
  getMe
);

router.post(
  "/logout",
  logout
);

export default router;