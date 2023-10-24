import "./038 card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  const filteredMonsters = monsters;
  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => {
        const { name, id, email } = monster;
        return <Card name={name} id={id} key={id} email={email} />;
      })}
    </div>
  );
};
export default CardList;
