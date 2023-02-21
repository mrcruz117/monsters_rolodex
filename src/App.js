import { Component, useEffect, useState } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class AppOLD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      filteredMonsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users, filteredMonsters: users })
      );
  }

  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value.toLowerCase() });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { handleSearchChange } = this;

    return (
      <div className="App">
        <h1 className={"app-title"}>Monsters Rolodex</h1>
        <SearchBox
          className={"monsters-search-box"}
          handleSearchChange={handleSearchChange}
          placeholder="Search Monsters"
        />
        <CardList searchField={searchField} monsters={monsters} />
      </div>
    );
  }
}

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const handleSearchChange = (e) => {
    setSearchField(e.target.value.toLowerCase());
  };
  return (
    <div className="App">
      <h1 className={"app-title"}>Monsters Rolodex</h1>
      <SearchBox
        className={"monsters-search-box"}
        handleSearchChange={handleSearchChange}
        placeholder="Search Monsters"
      />
      <CardList searchField={searchField} monsters={monsters} />
    </div>
  );
};

export default App;
