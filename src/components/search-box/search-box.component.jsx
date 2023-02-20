import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { placeholder, handleChange } = this.props;

    return (
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    );
  }
}

export default SearchBox;
