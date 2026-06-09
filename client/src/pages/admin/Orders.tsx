import {
  useEffect,
  useState,
} from "react";

import {
  getAllOrders,
  updateOrderStatus,
} from "../../api/adminApi";

import type {
  Order,
} from "../../types/order";

function AdminOrders() {

 

  const fetchOrders =
    async () => {

      const data =
        await getAllOrders();

      setOrders(data);
    };
 const [
    orders,
    setOrders,
  ] = useState<Order[]>([]);

  useEffect(() => {

    fetchOrders();

  }, []);
  const handleStatus =
    async (
      id: string,
      status: string
    ) => {

      await updateOrderStatus(
        id,
        status
      );

      fetchOrders();
    };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Orders
      </h1>

      <div className="space-y-4">

        {orders.map(
          (order) => (

            <div
              key={order._id}
              className="
              bg-white
              p-6
              rounded-xl
              shadow
              "
            >

              <p>
                Customer:
                {" "}
                {
                  order.user?.name
                }
              </p>

              <p>
                Email:
                {" "}
                {
                  order.user?.email
                }
              </p>

              <p>
                Total:
                ₹
                {
                  order.totalAmount
                }
              </p>

              <select
                value={
                  order.status
                }
                onChange={(
                  e
                ) =>
                  handleStatus(
                    order._id,
                    e.target.value
                  )
                }
                className="
                mt-3
                border
                p-2
                rounded
                "
              >

                <option value="pending">
                  Pending
                </option>

                <option value="processing">
                  Processing
                </option>

                <option value="shipped">
                  Shipped
                </option>

                <option value="delivered">
                  Delivered
                </option>

              </select>

            </div>
          )
        )}

      </div>

    </div>
  );
}

export default AdminOrders;