import { useParams } from "react-router-dom";

import ProductForm from "../../components/admin/ProductForm";

import type{
  CreateProductRequest,
} from "../../types/product";

function EditProduct() {
  const { id } =
    useParams();

  const product:
    CreateProductRequest = {
      name: "",
      description: "",
      price: 0,
      category: "electronics",
      image: "",
      stock: 0,
    };

  const handleSubmit =
    async (
      data: CreateProductRequest
    ) => {
      console.log(
        id,
        data
      );
    };

  return (
    <div>
      <h1>
        Edit Product
      </h1>

      <ProductForm
        defaultValues={
          product
        }
        onSubmit={
          handleSubmit
        }
      />
    </div>
  );
}

export default EditProduct;