import { Link } from "react-router-dom";

import type { Product } from "../types/product";

import { useAppDispatch } from "../hooks/reduxHooks";

import { addToCart } from "../features/cart/cartSlice";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        _id: product._id,

        name: product.name,

        image: product.image,

        price: product.price,

        quantity: 1,
      }),
    );
  };

  return (
    <div
      className="
      bg-white
      rounded-lg
      shadow-md
      overflow-hidden
      transition
      hover:shadow-lg
      "
    >
      <img
        src={`http://localhost:5000${product.image}`}
        alt={product.name}
        className="
      h-56
      w-full
      object-cover
      "
      />

      <div className="p-4">
        <p
          className="
          text-sm
          text-gray-500
          "
        >
          {product.category}
        </p>

        <h2
          className="
          text-lg
          font-semibold
          mt-1
          "
        >
          {product.name}
        </h2>

        <p
          className="
          text-2xl
          font-bold
          mt-2
          "
        >
          ₹{product.price}
        </p>

        <p
          className="
          text-sm
          mt-2
          "
        >
          Stock:
          {product.stock}
        </p>

        <div
          className="
          flex
          gap-3
          mt-4
          "
        >
          <Link
            to={`/products/${product._id}`}
            className="
            flex-1
            text-center
            bg-gray-200
            py-2
            rounded
            "
          >
            View
          </Link>

          <button
            onClick={handleAddToCart}
            className="
            flex-1
            bg-black
            text-white
            py-2
            rounded
            "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
