import mongoose, { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;

  description: string;

  price: number;

  category: string;

  image: string;

  stock: number;
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
