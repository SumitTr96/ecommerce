
import { useState } from "react";

import ProductGrid from "../components/ProductGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

import type { Product } from "../types/product";

const products: Product[] = [
  {
    _id: "1",
    name: "iPhone",
    description: "",
    category: "electronics",
    image:
      "https://via.placeholder.com/300",
    price: 70000,
    stock: 10,
  },
  {
    _id: "2",
    name: "Apple Watch",
    description: "",
    category: "electronics",
    image:
      "https://via.placeholder.com/300",
    price: 25000,
    stock: 15,
  },
];

function Products() {
  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  const filteredProducts =
    products.filter((product) => {
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
    });

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
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

        {/* Filters */}
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
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        </div>

        {/* Product Count */}
        <div className="mb-6">
          <p className="text-slate-600">
            Showing
            {" "}
            <span className="font-semibold text-slate-800">
              {
                filteredProducts.length
              }
            </span>
            {" "}
            products
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length >
        0 ? (
          <ProductGrid
            products={
              filteredProducts
            }
          />
        ) : (
          <div
            className="
            bg-white
            rounded-3xl
            shadow-lg
            p-12
            text-center
            "
          >
            <div className="text-6xl mb-4">
              🔍
            </div>

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
              Try changing your search
              or filter criteria.
            </p>
          </div>
        )}

      </div>

    </div>
  );
}

export default Products;

