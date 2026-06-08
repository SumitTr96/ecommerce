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

import AdminRoute from "./AdminRoute";

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
{/* Protected Routes */}

      <Route
 path="/checkout"
 element={
  <ProtectedRoute>
   <Checkout/>
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
    </Routes>


    
  );
}

export default AppRoutes;