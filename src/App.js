import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/cardList/cardList.component";
import SearchBox from "./components/searchBox/searchBox.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [found, setFound] = useState(true);

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
    if (newFilteredMonsters[0] == null)
      setFound(false);
    else
      setFound(true);
    
  }, [searchField, monsters]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search golani..."
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters} />
      {!found && <h1 className="notFound">No monsters found</h1>}
    </div>
  );
};
export default App;
