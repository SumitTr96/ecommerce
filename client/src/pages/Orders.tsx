
import {
  useEffect,
} from "react";

import {
  Link,
} from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
} from "../hooks/reduxHooks";

import {
  fetchOrdersThunk,
} from "../features/order/orderThunk";

function Orders() {
  const dispatch =
    useAppDispatch();

  const orders =
    useAppSelector(
      (state) =>
        state.order.orders
    );

  useEffect(() => {
    dispatch(
      fetchOrdersThunk()
    );
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">

          <h1
            className="
            text-3xl
            md:text-4xl
            font-bold
            text-slate-800
            "
          >
            My Orders
          </h1>

          <p className="mt-2 text-slate-500">
            View and track all your orders
          </p>

        </div>

        {/* Empty State */}
        {orders.length === 0 && (
          <div
            className="
            bg-white
            rounded-3xl
            shadow-lg
            p-12
            text-center
            "
          >
            <div className="text-6xl mb-4">
              📦
            </div>

            <h2
              className="
              text-2xl
              font-semibold
              text-slate-800
              "
            >
              No Orders Yet
            </h2>

            <p className="text-slate-500 mt-2">
              Your placed orders will appear here.
            </p>

            <Link
              to="/products"
              className="
              inline-block
              mt-6
              px-6
              py-3
              rounded-xl
              bg-indigo-600
              text-white
              font-semibold
              hover:bg-indigo-700
              transition
              "
            >
              Start Shopping
            </Link>
          </div>
        )}

        {/* Orders List */}
        <div className="space-y-6">

          {orders.map(
            (order) => (
              <Link
                key={order._id}
                to={`/orders/${order._id}`}
              >
                <div
                  className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  hover:shadow-xl
                  transition-all
                  duration-300
                  p-6
                  mb-4
                  border
                  border-transparent
                  hover:border-indigo-200
                  "
                >

                  <div
                    className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-4
                    "
                  >

                    {/* Left */}
                    <div>
                      <p
                        className="
                        text-sm
                        text-slate-500
                        "
                      >
                        Order ID
                      </p>

                      <p
                        className="
                        font-medium
                        text-slate-800
                        break-all
                        "
                      >
                        {order._id}
                      </p>
                    </div>

                    {/* Center */}
                    <div>
                      <p
                        className="
                        text-sm
                        text-slate-500
                        "
                      >
                        Total Amount
                      </p>

                      <p
                        className="
                        text-2xl
                        font-bold
                        text-indigo-600
                        "
                      >
                        ₹
                        {
                          order.totalAmount
                        }
                      </p>
                    </div>

                    {/* Right */}
                    <div>
                      <p
                        className="
                        text-sm
                        text-slate-500
                        "
                      >
                        Status
                      </p>

                      <span
                        className="
                        inline-block
                        mt-1
                        px-4
                        py-2
                        rounded-full
                        bg-green-100
                        text-green-700
                        text-sm
                        font-medium
                        "
                      >
                        {order.status}
                      </span>
                    </div>

                  </div>

                </div>
              </Link>
            )
          )}

        </div>

      </div>

    </div>
  );
}

export default Orders;

