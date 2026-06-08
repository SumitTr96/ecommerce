import mongoose, {
  Document,
  Types,
} from "mongoose";

export interface IOrderItem {
  product: Types.ObjectId;

  name: string;

  price: number;

  quantity: number;
}

export interface IOrder
  extends Document {

  user: Types.ObjectId;

  items: IOrderItem[];

  totalAmount: number;

  status: string;
}

const orderSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      items: [
        {
          product: {
            type:
              mongoose.Schema.Types.ObjectId,

            ref:
              "Product",

            required:
              true,
          },

          name: {
            type:
              String,

            required:
              true,
          },

          price: {
            type:
              Number,

            required:
              true,
          },

          quantity: {
            type:
              Number,

            required:
              true,
          },
        },
      ],

      totalAmount: {
        type:
          Number,

        required:
          true,
      },

      status: {
        type:
          String,

        enum: [
          "pending",
          "processing",
          "shipped",
          "delivered",
        ],

        default:
          "pending",
      },
    },

    {
      timestamps:
        true,
    }
  );

const Order =
  mongoose.model<IOrder>(
    "Order",
    orderSchema
  );

export default Order;