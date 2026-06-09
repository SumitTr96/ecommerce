import {
  Link,
} from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-7xl mx-auto">

        <div
          className="
          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-pink-500
          rounded-3xl
          p-8
          text-white
          mb-8
          "
        >
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="mt-2">
            Manage products and store data
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            to="/admin/products"
            className="
            bg-white
            rounded-3xl
            shadow-lg
            p-8
            hover:shadow-xl
            transition
            "
          >
            <div className="text-5xl mb-4">
              📦
            </div>

            <h2 className="text-xl font-semibold">
              Products
            </h2>

            <p className="text-slate-500 mt-2">
              Manage products
            </p>
          </Link>
          <Link
  to="/admin/orders"
  className="
  bg-white
  rounded-3xl
  shadow-lg
  p-8
  hover:shadow-xl
  transition
  "
>

          
            <div className="text-5xl mb-4">
              🛒
            </div>

            <h2 className="text-xl font-semibold">
              Orders
            </h2>

            <p className="text-slate-500 mt-2">
              View order statistics
            </p>
          
            </Link>
<Link
  to="/admin/users"
  className="
  bg-white
  rounded-3xl
  shadow-lg
  p-8
  hover:shadow-xl
  transition
  "
>

          
            <div className="text-5xl mb-4">
              👥
            </div>

            <h2 className="text-xl font-semibold">
              Users
            </h2>

            <p className="text-slate-500 mt-2">
              User management
            </p>
          
            </Link>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;