import express from "express";

import {
  createOrder,
  getOrders,
  getOrderById,
} from "../controllers/orderController";

import {
  protect,
} from "../middleware/authMiddleware";

const router =
  express.Router();

router
  .route("/")
  .post(
    protect,
    createOrder
  )
  .get(
    protect,
    getOrders
  );

router.get(
  "/:id",
  protect,
  getOrderById
);

export default router;