import {
  useParams,
} from "react-router-dom";

import ProductForm from "../../components/admin/ProductForm";

import type {
  Product,
  CreateProductRequest,
} from "../../types/product";

function EditProduct() {

  const { id } =
    useParams();

  const product: Product =
    {
      _id: id || "",

      name: "",

      description: "",

      category:
        "electronics",

      image: "",

      price: 0,

      stock: 0,
    };

  const handleSubmit =
    async (
      data: CreateProductRequest
    ) => {
      console.log(
        data
      );
    };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h1 className="text-3xl font-bold mb-6">
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

      </div>

    </div>
  );
}

export default EditProduct;