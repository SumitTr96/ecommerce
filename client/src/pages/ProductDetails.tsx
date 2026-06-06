
import {
  useEffect,
} from "react";

import {
  useParams,
} from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
} from "../hooks/reduxHooks";

import {
  fetchProductThunk,
} from "../features/product/productThunk";

import {
  addToCart,
} from "../features/cart/cartSlice";

function ProductDetails() {
  const { id } =
    useParams();

  const dispatch =
    useAppDispatch();

  const {
    product,
    loading,
  } = useAppSelector(
    (state) =>
      state.product
  );

  useEffect(() => {
    if (id) {
      dispatch(
        fetchProductThunk(
          id
        )
      );
    }
  }, [
    id,
    dispatch,
  ]);

  const handleAddToCart =
    () => {
      if (!product)
        return;

      dispatch(
        addToCart({
          _id:
            product._id,

          name:
            product.name,

          image:
            product.image,

          price:
            product.price,

          quantity: 1,
        })
      );
    };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <p className="text-slate-600">
            Loading Product...
          </p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-lg p-10">
          <p className="text-red-500">
            Product not found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-7xl mx-auto">

        <div
          className="
          bg-white
          rounded-3xl
          shadow-xl
          overflow-hidden
          "
        >
          <div
            className="
            grid
            lg:grid-cols-2
            gap-10
            "
          >

            {/* Product Image */}
            <div className="p-6 lg:p-10">

              <div
                className="
                bg-slate-50
                rounded-3xl
                overflow-hidden
                "
              >
                <img
                  src={
                    product.image
                  }
                  alt={
                    product.name
                  }
                  className="
                  w-full
                  h-[350px]
                  md:h-[500px]
                  object-cover
                  "
                />
              </div>

            </div>

            {/* Product Info */}
            <div className="p-6 lg:p-10 flex flex-col justify-center">

              <span
                className="
                inline-block
                w-fit
                px-4
                py-2
                rounded-full
                bg-indigo-100
                text-indigo-700
                font-medium
                mb-4
                "
              >
                {
                  product.category
                }
              </span>

              <h1
                className="
                text-3xl
                md:text-5xl
                font-bold
                text-slate-800
                "
              >
                {
                  product.name
                }
              </h1>

              <p
                className="
                mt-6
                text-slate-600
                leading-relaxed
                "
              >
                {
                  product.description
                }
              </p>

              <div className="mt-8">

                <p
                  className="
                  text-4xl
                  font-bold
                  text-indigo-600
                  "
                >
                  ₹
                  {
                    product.price
                  }
                </p>

                <p
                  className="
                  mt-3
                  text-sm
                  text-slate-500
                  "
                >
                  Stock Available:
                  {" "}
                  {
                    product.stock
                  }
                </p>

              </div>

              <div className="mt-10">

                <button
                  onClick={
                    handleAddToCart
                  }
                  className="
                  w-full
                  md:w-auto
                  px-10
                  py-4
                  rounded-xl
                  bg-indigo-600
                  text-white
                  font-semibold
                  hover:bg-indigo-700
                  transition
                  shadow-lg
                  "
                >
                  Add To Cart
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default ProductDetails;

