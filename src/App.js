import React from "react";
import './App.css'
class App extends React.Component {

  constructor(){
    super()

    this.state = {
      monsters: [
        {
          id: 1,
          name: "Liviu",
        },
        {
          id: 2,
          name: "Paul",
        },
        {
          id: 3,
          name: "Gabriel",
        },
        {
          id: 4,
          name: "Andrei",
        },
      ],
      name:"gigel",
    };
  }

  render() {
    return (
      <div>
        {
          this.state.monsters.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>
          })        
        }

        <button onClick={()=>{
          this.setState(
            ()=>{
              return {
                name:"giovani"
              }
            }
          )
        }}>

        </button>  
      </div>
    );
  }
}
export default App;
