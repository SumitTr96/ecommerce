
import {
  useNavigate,
} from "react-router-dom";

import {
  useAppSelector,
  useAppDispatch,
} from "../hooks/reduxHooks";

import {
  createOrderThunk,
} from "../features/order/orderThunk";

import {
  clearCart,
} from "../features/cart/cartSlice";

function Checkout() {
  const navigate =
    useNavigate();

  const dispatch =
    useAppDispatch();

  const cartItems =
    useAppSelector(
      (state) =>
        state.cart.items
    );

  const total =
    cartItems.reduce(
      (
        acc,
        item
      ) =>
        acc +
        item.price *
          item.quantity,
      0
    );

  const handleCheckout =
    async () => {

      const orderItems =
  cartItems.map(
    (item) => ({
      product:
        item._id,

      name:
        item.name,

      price:
        item.price,

      quantity:
        item.quantity,
    })
  );

      try {

  const result =
    await dispatch(
      createOrderThunk({
        items: orderItems,
        totalAmount: total,
      })
    ).unwrap();

  console.log(
    "Order created:",
    result
  );

  dispatch(
    clearCart()
  );

  navigate(
    "/orders"
  );

} catch (error) {

  console.error(
    "Order creation failed:",
    error
  );

}

      dispatch(
        clearCart()
      );

      navigate(
        "/orders"
      );
    };

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Checkout
          </h1>

          <p className="mt-2 text-slate-500">
            Review your order before placing it
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Order Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

              <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Order Items
              </h2>

              <div className="space-y-4">
                {cartItems.map(
                  (item) => (
                    <div
                      key={
                        item._id
                      }
                      className="
                      flex
                      justify-between
                      items-center
                      border-b
                      border-slate-200
                      pb-4
                      "
                    >
                      <div>
                        <h3 className="font-medium text-slate-800">
                          {item.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          Qty:
                          {" "}
                          {item.quantity}
                        </p>
                      </div>

                      <div className="font-semibold text-slate-800">
                        ₹
                        {item.price *
                          item.quantity}
                      </div>
                    </div>
                  )
                )}
              </div>

            </div>
          </div>

          {/* Summary */}
          <div>

            <div
              className="
              bg-white
              rounded-3xl
              shadow-lg
              overflow-hidden
              sticky
              top-6
              "
            >

              <div
                className="
                bg-gradient-to-r
                from-indigo-600
                via-purple-600
                to-pink-500
                px-6
                py-5
                "
              >
                <h2 className="text-white text-xl font-bold">
                  Order Summary
                </h2>
              </div>

              <div className="p-6">

                <div className="space-y-4">

                  <div className="flex justify-between">
                    <span className="text-slate-600">
                      Items
                    </span>

                    <span>
                      {
                        cartItems.length
                      }
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-600">
                      Shipping
                    </span>

                    <span className="text-green-600">
                      Free
                    </span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-xl font-bold">
                    <span>
                      Total
                    </span>

                    <span className="text-indigo-600">
                      ₹{total}
                    </span>
                  </div>

                </div>

                <button
                  onClick={
                    handleCheckout
                  }
                  className="
                  w-full
                  mt-8
                  py-3
                  rounded-xl
                  bg-indigo-600
                  text-white
                  font-semibold
                  hover:bg-indigo-700
                  transition
                  hover:shadow-lg
                  "
                >
                  Place Order
                </button>

                <p
                  className="
                  text-xs
                  text-center
                  text-slate-500
                  mt-4
                  "
                >
                  By placing your order,
                  you agree to our Terms
                  & Conditions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;

