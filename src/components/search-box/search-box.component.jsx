import "./search-box.styles.css";

const SearchBox = ({ placeholder, handleSearchChange, className }) => {
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
