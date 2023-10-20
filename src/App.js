import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state.monsters);
          }
        )
      );
  }

  search = (event) => {
    this.setState(() => {
      return {
        searchField: event.target.value.toLocaleLowerCase(),
      };
    });
  };

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters..."
          onChange={(event) => {
            this.search(event);
          }}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
