
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../utils/loginSchema";
import { useAppDispatch } from "../hooks/reduxHooks";
import { loginThunk } from "../features/auth/authThunk";

function Login() {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    dispatch(loginThunk(data));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        <div className="grid md:grid-cols-2">
          {/* Left Side */}
          <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-12 text-white">
            <h1 className="text-5xl font-extrabold mb-4">
              ShopEase
            </h1>

            <p className="text-lg text-white/90 leading-relaxed">
              Discover thousands of products,
              manage your orders, and enjoy a
              seamless shopping experience.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Secure Authentication</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Fast Checkout</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-2xl">✓</span>
                <span>Track Orders Easily</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="md:hidden text-center mb-8">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ShopEase
              </h2>
            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              Welcome Back
            </h2>

            <p className="mt-2 text-slate-500">
              Login to continue shopping
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-indigo-500
                    focus:ring-4
                    focus:ring-indigo-100
                  "
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>

                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter password"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-indigo-500
                    focus:ring-4
                    focus:ring-indigo-100
                  "
                />

                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end">
                <a
                  href="/forgot-password"
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="
                  w-full
                  rounded-xl
                  bg-indigo-600
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-indigo-700
                  hover:shadow-lg
                "
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-slate-600">
                Don't have an account?
              </p>

              <a
                href="/register"
                className="
                  mt-2
                  inline-block
                  font-semibold
                  text-indigo-600
                  hover:text-indigo-700
                "
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

