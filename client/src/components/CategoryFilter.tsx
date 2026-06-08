interface Props {
  category: string;

  categories: string[];

  onChange: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

function CategoryFilter({
  category,
  categories,
  onChange,
}: Props) {
  return (
    <select
      value={category}
      onChange={onChange}
      className="
      w-full
      border
      border-slate-300
      rounded-xl
      px-4
      py-3
      "
    >
      <option value="">
        All Categories
      </option>

      {categories.map(
        (category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        )
      )}
    </select>
  );
}

export default CategoryFilter;