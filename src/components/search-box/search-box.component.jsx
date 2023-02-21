import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { placeholder, handleSearchChange, className } = this.props;

    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={handleSearchChange}
      />
    );
  }
}

export default SearchBox;
