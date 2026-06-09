import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div
      className="
      w-64
      bg-gray-900
      text-white
      min-h-screen
      p-5
      "
    >
      <h2 className="text-2xl mb-8">Admin</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/admin/products">Products</Link>
        </li>

        <li>
          <Link to="/admin/products/create">Create Product</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
