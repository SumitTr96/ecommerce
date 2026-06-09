import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";

import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

import { logoutUser } from "../api/authApi";

function Navbar() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const { isAuthenticated, user } = useAppSelector((state) => state.auth);
  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error(error);
    }

    dispatch(logout());

    navigate("/");
  };
  return (
    <nav className="shadow-md bg-white">
      <div
        className="
        container
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >
        <Link
          to="/"
          className="
          text-xl
          font-bold
          "
        >
          Ecommerce
        </Link>

        <div
          className="
          flex
          gap-5
          items-center
          "
        >
          <Link to="/products">Products</Link>

          {isAuthenticated && <Link to="/orders">Orders</Link>}

          {isAuthenticated && (
            <Link to="/cart">
              <div
                className="
      relative
      "
              >
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
                  {totalItems}
                </span>
              </div>
            </Link>
          )}

          {isAuthenticated ? (
            <>
              <span
                className="
                font-medium
                "
              >
                {user?.name}
              </span>
              {user?.role === "admin" && (
                <Link
                  to="/admin"
                  className="
                bg-indigo-600
                text-white
                px-4
                py-2
                rounded
                hover:bg-indigo-700
                transition
                "
                >
                  Admin
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="
                bg-red-500
                text-white
                px-4
                py-2
                rounded
                 cursor-pointer
                hover:bg-red-600
                transition
                "
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
