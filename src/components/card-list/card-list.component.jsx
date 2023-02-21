import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
class CardList extends Component {
  render() {
    const { monsters, searchField } = this.props;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <div className="card-list">
        {filteredMonsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
