
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import { useAppSelector } from "../hooks/reduxHooks";

function Cart() {
  const items = useAppSelector(
    (state) => state.cart.items
  );

  const total = items.reduce(
    (acc, item) =>
      acc +
      item.price *
        item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
            Shopping Cart
          </h1>

          <p className="mt-2 text-slate-500">
            Review your items and proceed to checkout
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-800">
                  Cart Items
                </h2>

                <span className="text-sm text-slate-500">
                  {items.length} Items
                </span>
              </div>

              {items.length > 0 ? (
                <div className="space-y-5">
                  {items.map((item) => (
                    <CartItem
                      key={item._id}
                      item={item}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">
                    🛒
                  </div>

                  <h3 className="text-xl font-semibold text-slate-700">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 text-slate-500">
                    Add products to start shopping
                  </p>

                  <button
                    className="
                    mt-6
                    bg-indigo-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-indigo-700
                    transition
                    "
                  >
                    Continue Shopping
                  </button>
                </div>
              )}

            </div>
          </div>

          {/* Summary */}
          <div className="xl:sticky xl:top-8 h-fit">

            <div
              className="
              bg-white
              rounded-3xl
              shadow-lg
              overflow-hidden
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
                <CartSummary
                  total={total}
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;

