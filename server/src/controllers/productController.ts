import type{
  Request,
  Response,
} from "express";

import Product from "../models/Product";

// Create Product

export const createProduct =
  async (
    req: Request,
    res: Response
  ) => {

    const product =
      await Product.create({
        name:
          req.body.name,

        description:
          req.body.description,

        category:
          req.body.category,

        price:
          Number(
            req.body.price
          ),

        stock:
          Number(
            req.body.stock
          ),

        image:
          req.file
            ? `/uploads/${req.file.filename}`
            : "",
      });

    res
      .status(201)
      .json(product);
  };

//   get all products

export const getProducts =
  async (
    req: Request,
    res: Response
  ) => {

    const {
      search,
      category,
    } = req.query;

    const filter: any =
      {};

    if (search) {
      filter.name = {
        $regex:
          search,
        $options: "i",
      };
    }

    if (category) {
      filter.category =
        category;
    }

    const products =
      await Product.find(
        filter
      );

    res.json(products);
  };

// get product by id

  export const getProductById =
  async (
    req: Request,
    res: Response
  ) => {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {

      return res
        .status(404)
        .json({
          message:
            "Product not found",
        });

    }

    res.json(product);
  };

//   update product

export const updateProduct =
  async (
    req: Request,
    res: Response
  ) => {

    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    if (!product) {

      return res
        .status(404)
        .json({
          message:
            "Product not found",
        });

    }

    res.json(product);
  };

//   Delete product

export const deleteProduct =
  async (
    req: Request,
    res: Response
  ) => {

    const product =
      await Product.findById(
        req.params.id
      );

    if (!product) {

      return res
        .status(404)
        .json({
          message:
            "Product not found",
        });

    }

    await product.deleteOne();

    res.json({
      message:
        "Product deleted",
    });
  };