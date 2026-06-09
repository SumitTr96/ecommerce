import type { Request, Response } from "express";

import User from "../models/User";
import Order from "../models/Order";

// Get all users

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await User.find().select("-password").sort({
    createdAt: -1,
  });

  res.json(users);
};

// Delete user

export const deleteUser = async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (user._id.toString() === req.user?._id.toString()) {
    return res.status(400).json({
      message: "Cannot delete yourself",
    });
  }

  await user.deleteOne();

  res.json({
    message: "User deleted",
  });
};
// Get all orders

export const getAllOrders = async (req: Request, res: Response) => {
  const orders = await Order.find().populate("user", "name email").sort({
    createdAt: -1,
  });

  res.json(orders);
};

// Update order status

export const updateOrderStatus = async (req: Request, res: Response) => {
  const { status } = req.body;

  const allowedStatuses = ["pending", "processing", "shipped", "delivered"];

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({
      message: "Invalid status",
    });
  }

  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({
      message: "Order not found",
    });
  }

  order.status = status;

  await order.save();

  res.json(order);
};
