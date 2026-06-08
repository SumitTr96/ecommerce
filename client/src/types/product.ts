export type ProductCategory =
  | "electronics"
  | "fashion"
  | "books"
  | "home";

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProductRequest {
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  stock: number;
  image: FileList;
}

export type UpdateProductRequest =
  Partial<CreateProductRequest>;