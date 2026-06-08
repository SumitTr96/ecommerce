import mongoose, {
  Document,
  Types,
} from "mongoose";

export interface ICartItem {
  product: Types.ObjectId;

  quantity: number;
}

export interface ICart
  extends Document {

  user: Types.ObjectId;

  items: ICartItem[];
}

const cartSchema =
  new mongoose.Schema(
    {
      user: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,

        unique: true,
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

          quantity: {
            type:
              Number,

            required:
              true,

            default:
              1,
          },
        },
      ],
    },
    {
      timestamps:
        true,
    }
  );

const Cart =
  mongoose.model<ICart>(
    "Cart",
    cartSchema
  );

export default Cart;