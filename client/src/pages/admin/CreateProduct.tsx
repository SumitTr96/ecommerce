import { useNavigate } from "react-router-dom";

import ProductForm from "../../components/admin/ProductForm";

import { useAppDispatch } from "../../hooks/reduxHooks";

import { createProductThunk } from "../../features/product/productThunk";

import type { CreateProductRequest } from "../../types/product";

function CreateProduct() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (data: CreateProductRequest) => {
    await dispatch(createProductThunk(data));

    navigate("/admin/products");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6">Create Product</h1>

          <ProductForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
