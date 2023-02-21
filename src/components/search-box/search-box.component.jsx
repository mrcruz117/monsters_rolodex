import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { placeholder, handleSearchChange, className } = this.props;

    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={handleSearchChange}
      />
    );
  }
}

export default SearchBox;
