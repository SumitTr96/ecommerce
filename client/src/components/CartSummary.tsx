function CartSummary({
  total,
}: {
  total: number;
}) {
  return (
    <div
      className="
      border
      p-5
      "
    >
      <h2>
        Order Summary
      </h2>

      <p>
        Total:
        ₹{total}
      </p>

      <button>
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;