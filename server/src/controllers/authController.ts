import bcrypt from "bcryptjs";

import User from "../models/User";

import generateOtp from "../utils/generateOtp";
import type { Request, Response } from "express";

import generateToken from "../utils/generateToken";

import { registerSchema, loginSchema } from "../validators/authValidator";

import { sendOtp } from "../services/emailService";

//Register

export const register = async (req: Request, res: Response) => {
  // Request Validation (ZOD)
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      errors: result.error.issues,
    });
  }
  //

  const { name, email, password } = req.body;

  const existingUser = await User.findOne({
    email,
  });

  if (existingUser) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const otp = generateOtp();

  await sendOtp(email, otp);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    otp,
    otpExpiry: Date.now() + 5 * 60 * 1000,
  });

  res.status(201).json({
    message: "User created",
    email: user.email,
  });
};

//Login

export const login = async (req: Request, res: Response) => {
  // Request validation (ZOD)
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      errors: result.error.issues,
    });
  }
  //

  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  if (!user.isVerified) {
    return res.status(401).json({
      message: "Please verify OTP first",
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const token = generateToken(user._id.toString());

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
    },
  });
};

//Verify OTP

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user || user.otp !== otp) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  if (user.otpExpiry && user.otpExpiry < new Date()) {
    return res.status(400).json({
      message: "OTP expired",
    });
  }

  user.isVerified = true;

  user.otp = undefined;

  user.otpExpiry = undefined;

  await user.save();

  res.json({
    message: "OTP verified",
  });
};

// getMe

export const getMe = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }

  res.json({
    user: req.user,
  });
};

// Logout

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
  });

  res.json({
    message: "Logged out",
  });
};

// 2FA login

export const sendLoginOtp = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  const otp = generateOtp();

  user.otp = otp;

  user.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

  await user.save();

  await sendOtp(user.email, otp);

  res.json({
    message: "Login OTP sent",
  });
};

export const verifyLoginOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;

  const user = await User.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  if (String(user.otp) !== String(otp)) {
    return res.status(400).json({
      message: "Invalid OTP",
    });
  }

  if (user.otpExpiry && user.otpExpiry < new Date()) {
    return res.status(400).json({
      message: "OTP expired",
    });
  }

  user.otp = undefined;

  user.otpExpiry = undefined;

  await user.save();

  const token = generateToken(user._id.toString());

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  res.json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
    },
  });
};
