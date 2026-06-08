import dotenv from "dotenv";

dotenv.config();

import bcrypt from "bcryptjs";

import User from "../models/User";

import connectDB from "../config/db";

const seedAdmin =
  async () => {

    try {

      await connectDB();

      const existingAdmin =
        await User.findOne({
          email:
            "sumitkr9199@gmail.com",
        });

      if (
        existingAdmin
      ) {

        console.log(
          "Admin already exists"
        );

        process.exit(0);
      }

      const password =
        await bcrypt.hash(
          "admin123",
          10
        );

      await User.create({
        name:
          "Admin",

        email:
          "sumitkr9199@gmail.com",

        password,

        role:
          "admin",

        isVerified:
          true,
      });

      console.log(
        "Admin Created"
      );

      process.exit(0);

    } catch (
      error
    ) {

      console.error(
        error
      );

      process.exit(1);

    }

  };

seedAdmin();