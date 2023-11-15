import { useEffect, useState, ChangeEvent } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";

export type Monster = {
  id: number;
  name: string;
  email: string;
};

const App = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);
  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchField)
      )
    );
  }, [monsters, searchField]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
