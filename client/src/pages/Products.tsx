import {
  useEffect,
  useState,
} from "react";

import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

import api from "../api/axios";

import type {
  Product,
} from "../types/product";

function Products() {

  const [
    products,
    setProducts,
  ] = useState<Product[]>([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    category,
    setCategory,
  ] = useState("");

  useEffect(() => {

    const fetchProducts =
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
            error
          );

        } finally {

          setLoading(
            false
          );

        }

      };

    fetchProducts();

  }, []);

  const categories =
    [
      ...new Set(
        products.map(
          (product) =>
            product.category
        )
      ),
    ];

  const filteredProducts =
    products.filter(
      (product) => {

        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesCategory =
          category === ""
            ? true
            : product.category === category;

        return (
          matchesSearch &&
          matchesCategory
        );

      }
    );

  if (loading) {

    return (
      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        "
      >
        Loading Products...
      </div>
    );

  }

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">

      <div className="max-w-7xl mx-auto">

        <div
          className="
          bg-gradient-to-r
          from-indigo-600
          via-purple-600
          to-pink-500
          rounded-3xl
          p-8
          md:p-12
          text-white
          mb-8
          shadow-xl
          "
        >

          <h1
            className="
            text-3xl
            md:text-5xl
            font-bold
            "
          >
            Explore Products
          </h1>

          <p
            className="
            mt-3
            text-white/90
            text-lg
            "
          >
            Discover amazing products
            at unbeatable prices.
          </p>

        </div>

        <div
          className="
          bg-white
          rounded-3xl
          shadow-lg
          p-6
          mb-8
          "
        >

          <div
            className="
            flex
            flex-col
            md:flex-row
            gap-4
            "
          >

            <div className="flex-1">

              <SearchBar
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
              />

            </div>

            <div className="md:w-64">

              <CategoryFilter
                category={category}
                categories={categories}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
              />

            </div>

          </div>

        </div>

        <div className="mb-6">

          <p className="text-slate-600">

            Showing{" "}

            <span
              className="
              font-semibold
              text-slate-800
              "
            >
              {
                filteredProducts.length
              }
            </span>

            {" "}products

          </p>

        </div>

        {
          filteredProducts.length > 0
            ? (
              <ProductGrid
                products={
                  filteredProducts
                }
              />
            )
            : (
              <div
                className="
                bg-white
                rounded-3xl
                shadow-lg
                p-12
                text-center
                "
              >

                <h2
                  className="
                  text-2xl
                  font-semibold
                  text-slate-800
                  "
                >
                  No Products Found
                </h2>

                <p
                  className="
                  mt-2
                  text-slate-500
                  "
                >
                  Try changing your
                  search or filter.
                </p>

              </div>
            )
        }

      </div>

    </div>
  );
}

export default Products;