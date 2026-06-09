interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Search Products"
      value={value}
      onChange={onChange}
      className="
      border
      p-2
      rounded
      w-full
      "
    />
  );
}

export default SearchBar;
