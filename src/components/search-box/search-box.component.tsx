import "./search-box.styles.css";
import {
  ChangeEventHandler,
  // ChangeEvent
} from "react";

type SearchBoxProps = {
  placeholder?: string;
  className: string;
  handleSearchChange: ChangeEventHandler<HTMLInputElement>;
  /*
  Below is another way to define the type of the function.
  This allows us to specify the type of output of the function.
  Normally not needed since ChangeEventHandler is almost always void.

  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  */
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
