import {
  useAppDispatch,
} from "../hooks/reduxHooks";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

import type{ CartItem as CartItemType } from "../types/cart";

interface Props {
  item: CartItemType;
}

function CartItem({
  item,
}: Props) {
  const dispatch =
    useAppDispatch();
  return (
    <div
      className="
      flex
      justify-between
      items-center
      border-b
      py-4
      "
    >
      <div>
        <h3>
          {item.name}
        </h3>

        <p>
          ₹{item.price}
        </p>
      </div>

      <div
        className="
        flex
        gap-2
        "
      >
        <button
          onClick={() =>
            dispatch(
              decreaseQuantity(
                item._id
              )
            )
          }
        >
          -
        </button>

        <span>
          {
            item.quantity
          }
        </span>

        <button
          onClick={() =>
            dispatch(
              increaseQuantity(
                item._id
              )
            )
          }
        >
          +
        </button>
      </div>

      <button
        onClick={() =>
          dispatch(
            removeFromCart(
              item._id
            )
          )
        }
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;