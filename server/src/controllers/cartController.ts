import type { Request, Response } from "express";

import Cart from "../models/Cart";

// Get cart

export const getCart = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }

  const cart = await Cart.findOne({
    user: req.user?._id,
  }).populate("items.product");

  if (!cart) {
    return res.json({
      items: [],
    });
  }

  res.json(cart);
};

//   sync guest cart

export const syncCart = async (req: Request, res: Response) => {
  const { items } = req.body;

  if (!req.user) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }

  let cart = await Cart.findOne({
    user: req.user?._id,
  });

  if (!cart) {
    cart = await Cart.create({
      user: req.user?._id,

      items,
    });
  } else {
    cart.items = items;

    await cart.save();
  }

  res.json(cart);
};

//   update cart

export const updateCart = async (req: Request, res: Response) => {
  const { items } = req.body;

  if (!req.user) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }

  const cart = await Cart.findOneAndUpdate(
    {
      user: req.user._id,
    },

    {
      items,
    },

    {
      new: true,
    },
  );

  res.json(cart);
};

//   clear cart

export const clearCart = async (req: Request, res: Response) => {
  if (!req.user) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }

  const cart = await Cart.findOne({
    user: req.user?._id,
  });

  if (cart) {
    cart.items = [];

    await cart.save();
  }

  res.json({
    message: "Cart cleared",
  });
};
