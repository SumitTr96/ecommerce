import express from "express";

import {
  getAllUsers,
  deleteUser,
  getAllOrders,
  updateOrderStatus,
} from "../controllers/adminController";

import { protect } from "../middleware/authMiddleware";

import { adminOnly } from "../middleware/adminMiddleware";

const router = express.Router();

router.get("/users", protect, adminOnly, getAllUsers);

router.delete("/users/:id", protect, adminOnly, deleteUser);

router.get("/orders", protect, adminOnly, getAllOrders);

router.put("/orders/:id/status", protect, adminOnly, updateOrderStatus);

export default router;
