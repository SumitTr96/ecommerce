import ProductTable from "../../components/admin/ProductTable";

import type{ Product } from "../../types/product";

function Products() {
  const products: Product[] = [];

  const handleDelete = async (
    id: string
  ) => {
    console.log(id);
  };

  return (
    <div>
      <h1>
        Manage Products
      </h1>

      <ProductTable
        products={products}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default Products;