import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

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
    <table
      className="
      w-full
      border
      "
    >
      <thead>
        <tr>
          <th>
            Name
          </th>

          <th>
            Price
          </th>

          <th>
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
            >
              <td>
                {
                  product.name
                }
              </td>

              <td>
                ₹
                {
                  product.price
                }
              </td>

              <td>

                <Link
                  to={`/admin/products/${product._id}/edit`}
                >
                  Edit
                </Link>

                <button
                  onClick={() =>
                    onDelete(
                      product._id
                    )
                  }
                >
                  Delete
                </button>

              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default ProductTable;