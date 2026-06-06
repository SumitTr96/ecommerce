import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";
import Checkout from "../pages/Checkout";
import OrderDetails from "../pages/OrderDetails";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import VerifyOtp from "../pages/VerifyOtp";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}

      <Route path="/" element={<Home />} />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/products/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/verify-otp"
        element={<VerifyOtp />}
      />

      <Route
 path="/checkout"
 element={
  <ProtectedRoute>
   <Checkout/>
  </ProtectedRoute>
 }
/>

<Route
 path="/orders"
 element={
  <ProtectedRoute>
   <Orders/>
  </ProtectedRoute>
 }
/>

<Route
 path="/orders/:id"
 element={
  <ProtectedRoute>
   <OrderDetails/>
  </ProtectedRoute>
 }
/>

      {/* Protected Routes */}

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;