import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useAppSelector } from "../hooks/reduxHooks";

function Navbar() {
  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  return (
    <nav className="shadow-md">

      <div className="container mx-auto px-6 py-4 flex justify-between">

        <Link
          to="/"
          className="text-xl font-bold"
        >
          Ecommerce
        </Link>

        <div className="flex gap-5 items-center">

          <Link to="/products">
            Products
          </Link>

          <Link to="/orders">
            Orders
          </Link>

          <Link to="/cart">

            <div className="relative">

              <FaShoppingCart size={22} />

              <span
                className="
                absolute
                -top-2
                -right-2
                bg-red-500
                text-white
                rounded-full
                px-2
                text-xs
                "
              >
                {cartItems.length}
              </span>

            </div>

          </Link>

          <Link to="/login">
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;