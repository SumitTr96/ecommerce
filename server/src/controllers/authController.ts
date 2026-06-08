import bcrypt from "bcryptjs";

import User from "../models/User";

import generateOtp from "../utils/generateOtp";
import type {
  Request,
  Response,
} from "express";

import generateToken from "../utils/generateToken";

import {
  registerSchema,
  loginSchema,
} from "../validators/authValidator";

import {
  sendOtp,
} from "../services/emailService";

//Register

export const register =
  async (
    req: Request,
    res:Response
  ) => {

    // Request Validation (ZOD)
    const result =
  registerSchema.safeParse(
    req.body
  );

if (!result.success) {
  return res
    .status(400)
    .json({
      errors:
        result.error.issues,
    });
}
  // 

    const {
      name,
      email,
      password,
    } = req.body;

    const existingUser =
      await User.findOne({
        email,
      });

    if (
      existingUser
    ) {
      return res
        .status(400)
        .json({
          message:
            "User already exists",
        });
    }

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    const otp =
      generateOtp();

      await sendOtp(
        email,
        otp
        );

    const user =
      await User.create({
        name,
        email,
        password:
          hashedPassword,
        otp,
        otpExpiry:
          Date.now() +
          5 * 60 * 1000,
      });

    res.status(201).json({
      message:
        "User created",
      email:
        user.email,
    });
  };

//Login

export const login =
  async (
    req: Request,
    res: Response
  ) => {

    // Request validation (ZOD)
    const result =
  loginSchema.safeParse(
    req.body
  );

if (!result.success) {
  return res
    .status(400)
    .json({
      errors:
        result.error.issues,
    });
}
  // 

    const {
      email,
      password,
    } = req.body;

    const user =
  await User.findOne({
    email,
  });

if (!user) {
  return res
    .status(401)
    .json({
      message:
        "Invalid credentials",
    });
}

if (
  !user.isVerified
) {
  return res
    .status(401)
    .json({
      message:
        "Please verify OTP first",
    });
}

    const match =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!match) {
      return res
        .status(401)
        .json({
          message:
            "Invalid credentials",
        });
    }

    const token =
      generateToken(
        user._id.toString()
      );

    res.cookie(
      "token",
      token,
      {
        httpOnly: true,
      }
    );

    res.json({
      token,
      user: {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    isVerified:
      user.isVerified,
  },
    });
  };

  //Verify OTP

  export const verifyOtp =
  async (
    req: Request,
    res: Response
  ) => {

    const {
      email,
      otp,
    } = req.body;

    const user =
      await User.findOne({
        email,
      });

    if (
      !user ||
      user.otp !== otp
    ) {
      return res
        .status(400)
        .json({
          message:
            "Invalid OTP",
        });
    }

    user.isVerified =
      true;

    user.otp =
      undefined;

    await user.save();

    res.json({
      message:
        "OTP verified",
    });
  };

  export const getMe =
  async (
    req: Request,
    res: Response
  ) => {

    if (!req.user) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    res.json({
      user: req.user,
    });
  };

  export const logout =
  async (
    req: Request,
    res: Response
  ) => {

    res.cookie(
      "token",
      "",
      {
        httpOnly: true,
        expires: new Date(0),
      }
    );

    res.json({
      message: "Logged out",
    });
  };