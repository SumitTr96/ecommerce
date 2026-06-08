import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import ProductTable from "../../components/admin/ProductTable";

import api from "../../api/axios";

import type {
  Product,
} from "../../types/product";

function Products() {

  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const loadProducts =
      async () => {

        try {

          const response =
            await api.get(
              "/products"
            );

          setProducts(
            response.data
          );

        } catch (
          error
        ) {

          console.error(
            "Failed to fetch products:",
            error
          );

        } finally {

          setLoading(
            false
          );

        }

      };

    void loadProducts();

  }, []);

  const handleDelete =
    async (
      id: string
    ) => {

      const confirmed =
        window.confirm(
          "Are you sure you want to delete this product?"
        );

      if (!confirmed) {
        return;
      }

      try {

        await api.delete(
          `/products/${id}`
        );

        setProducts(
          (
            prevProducts
          ) =>
            prevProducts.filter(
              (
                product
              ) =>
                product._id !== id
            )
        );

      } catch (
        error
      ) {

        console.error(
          "Failed to delete product:",
          error
        );

      }

    };

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">
          Loading Products...
        </h2>
      </div>
    );

  }

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
            hover:bg-indigo-700
            transition
            "
          >
            Add Product
          </Link>

        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">

          {
            products.length > 0
              ? (
                <ProductTable
                  products={
                    products
                  }
                  onDelete={
                    handleDelete
                  }
                />
              )
              : (
                <div className="text-center py-10">

                  <h2 className="text-2xl font-semibold text-slate-700">
                    No Products Found
                  </h2>

                  <p className="mt-2 text-slate-500">
                    Create your first product.
                  </p>

                </div>
              )
          }

        </div>

      </div>

    </div>
  );
}

export default Products;