import { useEffect, useState } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField)
      )
    );
  }, [monsters, searchField]);

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
      <CardList searchField={searchField} monsters={filteredMonsters} />
    </div>
  );
};

export default App;
