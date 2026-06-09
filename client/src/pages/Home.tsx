import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";

function Home() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="bg-slate-100">
      {/* Hero Section */}
      <section
        className="
        min-h-[85vh]
        flex
        items-center
        justify-center
        px-4
        "
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <span
                className="
                inline-block
                px-4
                py-2
                rounded-full
                bg-indigo-100
                text-indigo-700
                font-medium
                mb-6
                "
              >
                #1 Online Shopping Destination
              </span>

              <h1
                className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                text-slate-800
                leading-tight
                "
              >
                Shop Smarter,
                <span
                  className="
                  block
                  bg-gradient-to-r
                  from-indigo-600
                  via-purple-600
                  to-pink-500
                  bg-clip-text
                  text-transparent
                  "
                >
                  Live Better
                </span>
              </h1>

              <p
                className="
                mt-6
                text-lg
                text-slate-600
                max-w-xl
                "
              >
                Discover premium products, unbeatable prices, and a seamless
                shopping experience all in one place.
              </p>

              <div
                className="
                flex
                flex-col
                sm:flex-row
                gap-4
                mt-8
                "
              >
                <Link
                  to="/products"
                  className="
      bg-indigo-600
      px-6
      py-3
      rounded-xl
      text-white
      font-semibold
      transition
                  hover:bg-indigo-700
                  hover:shadow-lg
      "
                >
                  Shop Now
                </Link>

                {!isAuthenticated && (
                  <Link
                    to="/register"
                    className="
      bg-indigo-600
      px-6
      py-3
      rounded-xl
      text-white
      font-semibold
      transition
                  hover:bg-indigo-700
                  hover:shadow-lg
      "
                  >
                    Create Account
                  </Link>
                )}
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div
                className="
                bg-white
                rounded-3xl
                shadow-2xl
                p-8
                "
              >
                <div
                  className="
                  bg-gradient-to-br
                  from-indigo-600
                  via-purple-600
                  to-pink-500
                  rounded-2xl
                  h-[350px]
                  flex
                  items-center
                  justify-center
                  "
                >
                  <span className="text-8xl">🛍️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="
            text-3xl
            font-bold
            text-center
            text-slate-800
            mb-12
            "
          >
            Why Shop With Us?
          </h2>

          <div
            className="
            grid
            md:grid-cols-3
            gap-8
            "
          >
            <div
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
              text-center
              "
            >
              <div className="text-5xl mb-4">🚚</div>

              <h3
                className="
                text-xl
                font-semibold
                mb-3
                "
              >
                Free Delivery
              </h3>

              <p className="text-slate-500">
                Fast and reliable shipping directly to your doorstep.
              </p>
            </div>

            <div
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
              text-center
              "
            >
              <div className="text-5xl mb-4">🔒</div>

              <h3
                className="
                text-xl
                font-semibold
                mb-3
                "
              >
                Secure Payments
              </h3>

              <p className="text-slate-500">
                Shop confidently with protected transactions.
              </p>
            </div>

            <div
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
              text-center
              "
            >
              <div className="text-5xl mb-4">⭐</div>

              <h3
                className="
                text-xl
                font-semibold
                mb-3
                "
              >
                Premium Products
              </h3>

              <p className="text-slate-500">
                Carefully selected products with guaranteed quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
