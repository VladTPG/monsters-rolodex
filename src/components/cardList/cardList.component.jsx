import { Component } from "react";
import "./038 card-list.styles.css";
import Card from "../card/card.component";

export default class cardList extends Component {
  render() {
    const filteredMonsters = this.props.monsters;
    return (
      <div className="card-list">
        {filteredMonsters.map((monster) => {
          const { name, id, email } = monster;
          return <Card name={name} id={id} email={email} />;
        })}
      </div>
    );
  }
}
