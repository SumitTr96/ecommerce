import express from "express";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

import {
  protect,
} from "../middleware/authMiddleware";

import {
  adminOnly,
} from "../middleware/adminMiddleware";

import upload from "../middleware/uploadMiddleware";

const router =
  express.Router();

router
  .route("/")
  .get(getProducts)
  .post(
    protect,
    adminOnly,
    upload.single(
    "image"
  ),
    createProduct
  );

router
  .route("/:id")
  .get(
    getProductById
  )
  .put(
    protect,
    adminOnly,
    updateProduct
  )
  .delete(
    protect,
    adminOnly,
    deleteProduct
  );

export default router;