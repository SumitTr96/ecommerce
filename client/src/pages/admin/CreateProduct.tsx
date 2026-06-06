import { useNavigate } from "react-router-dom";

import ProductForm from "../../components/admin/ProductForm";

import { useAppDispatch } from "../../hooks/reduxHooks";

import {
  createProductThunk,
} from "../../features/product/productThunk";

import type{
  CreateProductRequest,
} from "../../types/product";

function CreateProduct() {
  const dispatch =
    useAppDispatch();

  const navigate =
    useNavigate();

  const handleSubmit =
    async (
      data: CreateProductRequest
    ) => {

      await dispatch(
        createProductThunk(data)
      );

      navigate(
        "/admin/products"
      );
    };

  return (
    <div>
      <h1>
        Create Product
      </h1>

      <ProductForm
        onSubmit={
          handleSubmit
        }
      />
    </div>
  );
}

export default CreateProduct;