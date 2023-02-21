import { Component } from "react";
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
          const { id, name, email } = monster;
          return (
            <div key={id} className="card-container">
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
