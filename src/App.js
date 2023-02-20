import { Component } from "react";

import "./App.css";

class App extends Component {
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

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="App">
        <input
          className="search-box"
          type={"search"}
          placeholder={"search monsters"}
          onChange={handleSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
