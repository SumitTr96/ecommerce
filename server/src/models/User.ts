import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
  otp?: string | undefined;
  otpExpiry?: Date | undefined;
}
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    otp: String,

    otpExpiry: Date,
  },
  {
    timestamps: true,
  },
);
const User = mongoose.model<IUser>("User", userSchema);

export default User;
