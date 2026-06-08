import type {
  Request,
  Response,
} from "express";

import Order from "../models/Order";
import Cart from "../models/Cart";
import Product from "../models/Product";

// Create order

export const createOrder =
  async (
    req: Request,
    res: Response
  ) => {

    if (!req.user) {

      return res
        .status(401)
        .json({
          message:
            "Not authorized",
        });

    }

    const {
      items,
      totalAmount,
    } = req.body;

    const order =
  await Order.create({
    user:
      req.user._id,

    items,

    totalAmount,
  });

for (
  const item of items
) {

  const product =
    await Product.findById(
      item.product
    );

  if (
    product
  ) {

    if (
      product.stock <
      item.quantity
    ) {

      return res
        .status(400)
        .json({
          message:
            `${product.name} is out of stock`,
        });

    }

    product.stock -=
      item.quantity;

    await product.save();

  }

}

await Cart.findOneAndUpdate(
  {
    user:
      req.user._id,
  },

  {
    items: [],
  }
);
    res
      .status(201)
      .json(order);
  };

//   Get user orders

export const getOrders =
  async (
    req: Request,
    res: Response
  ) => {

    if (!req.user) {

      return res
        .status(401)
        .json({
          message:
            "Not authorized",
        });

    }

    const orders =
      await Order.find({
        user:
          req.user._id,
      })
        .sort({
          createdAt:
            -1,
        });

    res.json(
      orders
    );
  };

//   get single order

export const getOrderById =
  async (
    req: Request,
    res: Response
  ) => {

    if (!req.user) {

      return res
        .status(401)
        .json({
          message:
            "Not authorized",
        });

    }
    const orderId = req.params.id;

if (!orderId) {
  return res.status(400).json({
    message: "Order id required",
  });
}

    const order =
      await Order.findOne({
        _id: orderId,

        user: req.user!._id,
      });

    if (!order) {

      return res
        .status(404)
        .json({
          message:
            "Order not found",
        });

    }

    res.json(
      order
    );
  };