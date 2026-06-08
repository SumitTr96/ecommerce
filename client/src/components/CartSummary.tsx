import {
  useNavigate,
} from "react-router-dom";

function CartSummary({
  total,
}: {
  total: number;
}) {

  const navigate =
    useNavigate();

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

      <button
        onClick={() =>
          navigate(
            "/checkout"
          )
        }
        className="
        mt-4
        bg-indigo-600
        text-white
        px-4
        py-2
        rounded
        cursor-pointer
        "
      >
        Checkout
      </button>
    </div>
  );
}

export default CartSummary;