import {
  Link,
} from "react-router-dom";

import ProductTable from "../../components/admin/ProductTable";

import type {
  Product,
} from "../../types/product";

function Products() {

  const products:
    Product[] = [];

  const handleDelete =
    async (
      id: string
    ) => {
      console.log(id);
    };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-8">

          <h1 className="text-4xl font-bold">
            Products
          </h1>

          <Link
            to="/admin/products/create"
            className="
            bg-indigo-600
            text-white
            px-5
            py-3
            rounded-xl
            "
          >
            Add Product
          </Link>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">

          <ProductTable
            products={
              products
            }
            onDelete={
              handleDelete
            }
          />

        </div>

      </div>

    </div>
  );
}

export default Products;