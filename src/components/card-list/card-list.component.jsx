import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters, searchField } = this.props;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="card-list">
        {filteredMonsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
