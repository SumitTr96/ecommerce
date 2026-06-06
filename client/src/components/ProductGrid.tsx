import ProductCard from "./ProductCard";

import type { Product } from "../types/product";

interface Props {
  products: Product[];
}

function ProductGrid({
  products,
}: Props) {
  return (
    <div
      className="
      grid
      md:grid-cols-4
      gap-6
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;