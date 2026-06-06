import {
  useForm,
} from "react-hook-form";

import type {
  CreateProductRequest,
} from "../../types/product";

interface Props {
  defaultValues?:
    Partial<CreateProductRequest>;

  onSubmit: (
    data:
      CreateProductRequest
  ) => void;
}

function ProductForm({
  defaultValues,
  onSubmit,
}: Props) {

  const {
    register,
    handleSubmit,
  } = useForm<
    CreateProductRequest
  >({
    defaultValues,
  });

  return (
    <form
      onSubmit={handleSubmit(
        onSubmit
      )}
    >

      <input
        {...register(
          "name"
        )}
      />

      <textarea
        {...register(
          "description"
        )}
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
      />

      <input
        {...register(
          "category"
        )}
      />

      <input
        {...register(
          "image"
        )}
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
      />

      <button>
        Save
      </button>

    </form>
  );
}

export default
ProductForm;