import { useForm } from "react-hook-form";

import type {
  ProductCategory,
  CreateProductRequest,
} from "../../types/product";

interface Props {
  defaultValues?: {
    name?: string;
    description?: string;
    category?: ProductCategory;
    price?: number;
    stock?: number;
  };

  onSubmit: (data: CreateProductRequest) => void;
}

function ProductForm({ defaultValues, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<CreateProductRequest>({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
        {...register("description")}
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

      <select
        {...register("category")}
        className="
  w-full
  border
  border-slate-300
  rounded-xl
  px-4
  py-3
  "
      >
        <option value="">Select Category</option>

        <option value="electronics">Electronics</option>

        <option value="fashion">Fashion</option>

        <option value="books">Books</option>

        <option value="home">Home</option>

        <option value="gaming">Gaming</option>

        <option value="mobiles">Mobiles</option>

        <option value="accessories">Accessories</option>
      </select>

      <input
        type="number"
        {...register("price", {
          valueAsNumber: true,
        })}
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
        {...register("stock", {
          valueAsNumber: true,
        })}
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
        type="file"
        accept="image/*"
        {...register("image")}
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
