import "./search-box.styles.css";
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  placeholder?: string;
  className: string;
  handleSearchChange: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({
  placeholder,
  handleSearchChange,
  className,
}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBox;
