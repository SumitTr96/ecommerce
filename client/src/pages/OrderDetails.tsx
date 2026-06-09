import { useEffect } from "react";

import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

import { fetchOrderThunk } from "../features/order/orderThunk";

function OrderDetails() {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const order = useAppSelector((state) => state.order.selectedOrder);

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderThunk(id));
    }
  }, [id, dispatch]);

  if (!order) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <p className="text-slate-600 text-lg">Loading Order...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1
            className="
            text-3xl
            md:text-4xl
            font-bold
            text-slate-800
            "
          >
            Order Details
          </h1>

          <p className="mt-2 text-slate-500">
            Track and review your order information
          </p>
        </div>

        {/* Order Summary */}
        <div
          className="
          bg-white
          rounded-3xl
          shadow-lg
          overflow-hidden
          mb-8
          "
        >
          <div
            className="
            bg-gradient-to-r
            from-indigo-600
            via-purple-600
            to-pink-500
            px-8
            py-6
            "
          >
            <h2 className="text-white text-2xl font-bold">Order Summary</h2>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-slate-500">Order ID</p>

                <p className="font-semibold text-slate-800 break-all">
                  {order._id}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Total Amount</p>

                <p className="font-bold text-2xl text-indigo-600">
                  ₹{order.totalAmount}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Status</p>

                <span
                  className="
                  inline-block
                  mt-1
                  px-4
                  py-2
                  rounded-full
                  bg-green-100
                  text-green-700
                  font-medium
                  "
                >
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Items */}

        <div
          className="
          bg-white
          rounded-3xl
          shadow-lg
          p-8
          "
        >
          <h2
            className="
            text-2xl
            font-semibold
            text-slate-800
            mb-6
            "
          >
            Ordered Items
          </h2>

          <div className="space-y-4">
            {order.items?.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-3
                  border-b
                  border-slate-200
                  pb-4
                  "
              >
                <div>
                  <h3 className="font-medium text-slate-800">{item.name}</h3>

                  <p className="text-sm text-slate-500">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="font-semibold text-slate-800">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
