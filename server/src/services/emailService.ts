import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,

    pass: process.env.EMAIL_PASS,
  },
});

export const sendOtp = async (email: string, otp: string) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,

    to: email,

    subject: "OTP Verification",

    text: `Your OTP is ${otp}`,
  });
};
