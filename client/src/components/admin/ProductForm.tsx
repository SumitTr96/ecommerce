import {
  useForm,
} from "react-hook-form";

import type {
  Product,
  CreateProductRequest,
} from "../../types/product";

interface Props {
  defaultValues?:
    Partial<Product>;

  onSubmit: (
    data: CreateProductRequest
  ) => void;
}

function ProductForm({
  defaultValues,
  onSubmit,
}: Props) {

  const {
    register,
    handleSubmit,
  } =
    useForm<CreateProductRequest>({
      defaultValues,
    });

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
      className="space-y-5"
    >
      <input
        {...register("name")}
        placeholder="Product Name"
        className="
        w-full
        border
        border-slate-300
        rounded-xl
        px-4
        py-3
        "
      />

      <textarea
        {...register(
          "description"
        )}
        placeholder="Description"
        className="
        w-full
        border
        border-slate-300
        rounded-xl
        px-4
        py-3
        "
      />

      <input
        {...register(
          "category"
        )}
        placeholder="Category"
        className="
        w-full
        border
        border-slate-300
        rounded-xl
        px-4
        py-3
        "
      />

      <input
        type="number"
        {...register(
          "price",
          {
            valueAsNumber:
              true,
          }
        )}
        placeholder="Price"
        className="
        w-full
        border
        border-slate-300
        rounded-xl
        px-4
        py-3
        "
      />

      <input
        type="number"
        {...register(
          "stock",
          {
            valueAsNumber:
              true,
          }
        )}
        placeholder="Stock"
        className="
        w-full
        border
        border-slate-300
        rounded-xl
        px-4
        py-3
        "
      />

      <input
        {...register(
          "image"
        )}
        placeholder="Image URL"
        className="
        w-full
        border
        border-slate-300
        rounded-xl
        px-4
        py-3
        "
      />

      <button
        type="submit"
        className="
        w-full
        bg-indigo-600
        text-white
        py-3
        rounded-xl
        hover:bg-indigo-700
        "
      >
        Save Product
      </button>

    </form>
  );
}

export default ProductForm;