interface Props {
  category: string;

  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

function CategoryFilter({
  category,
  onChange,
}: Props) {
  return (
    <select
      value={category}
      onChange={onChange}
      className="
      border
      p-2
      rounded
      "
    >
      <option value="">
        All Categories
      </option>

      <option value="electronics">
        Electronics
      </option>

      <option value="fashion">
        Fashion
      </option>

      <option value="books">
        Books
      </option>

    </select>
  );
}

export default CategoryFilter;