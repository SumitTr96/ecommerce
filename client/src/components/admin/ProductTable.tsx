import {
  Link,
} from "react-router-dom";

import type {
  Product,
} from "../../types/product";

interface Props {
  products: Product[];

  onDelete: (
    id: string
  ) => void;
}

function ProductTable({
  products,
  onDelete,
}: Props) {

  return (
    <div className="overflow-x-auto">

      <table className="w-full">

        <thead>
          <tr className="border-b">

            <th className="p-4 text-left">
              Name
            </th>

            <th className="p-4 text-left">
              Price
            </th>

            <th className="p-4 text-left">
              Stock
            </th>

            <th className="p-4 text-left">
              Actions
            </th>

          </tr>
        </thead>

        <tbody>

          {products.map(
            (
              product
            ) => (
              <tr
                key={
                  product._id
                }
                className="border-b"
              >

                <td className="p-4">
                  {
                    product.name
                  }
                </td>

                <td className="p-4">
                  ₹
                  {
                    product.price
                  }
                </td>

                <td className="p-4">
                  {
                    product.stock
                  }
                </td>

                <td className="p-4 flex gap-3">

                  <Link
                    to={`/admin/products/${product._id}/edit`}
                    className="
                    text-indigo-600
                    "
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      onDelete(
                        product._id
                      )
                    }
                    className="
                    text-red-600
                    "
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default ProductTable;