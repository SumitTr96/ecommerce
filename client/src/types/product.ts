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

export type CreateProductRequest =
  Omit<
    Product,
    "_id" |
    "createdAt" |
    "updatedAt"
  >;

export type UpdateProductRequest =
  Partial<CreateProductRequest>;