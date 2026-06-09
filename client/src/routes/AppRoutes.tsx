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
import Dashboard from "../pages/admin/Dashboard";
import AdminProducts from "../pages/admin/Products";
import CreateProduct from "../pages/admin/CreateProduct";
import EditProduct from "../pages/admin/EditProduct";
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";
import AdminOrders from "../pages/admin/Orders";
import AdminUsers from "../pages/admin/Users";

import ProtectedRoute from "./ProtectedRoute";
import LoginOtp from "../pages/LoginOtp";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route
        path="/login-otp"
        element={
          <PublicRoute>
            <LoginOtp />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/verify-otp"
        element={
          <PublicRoute>
            <VerifyOtp />
          </PublicRoute>
        }
      />
      {/* Protected Routes */}
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders/:id"
        element={
          <ProtectedRoute>
            <OrderDetails />
          </ProtectedRoute>
        }
      />
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
      // Admin routes
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <AdminRoute>
            <AdminProducts />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/products/create"
        element={
          <AdminRoute>
            <CreateProduct />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/products/:id/edit"
        element={
          <AdminRoute>
            <EditProduct />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <AdminRoute>
            <AdminOrders />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <AdminUsers />
          </AdminRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
