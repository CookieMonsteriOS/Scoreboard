import React, {Component} from 'react';
import Header from  './Header';
import Player from  './Player';
import AddPlayerForm from  './AddPlayerForm';


class App extends Component {
  state = {
    players: [
      {
        name: "Mark",
        score:0,
        id: 1
      },
      {
        name: "Treasure",
          score:0,
          id: 2
      },
      {
         name: "Ashley",
          score:0,
          id: 3
      },
      {
         name: "James",
          score:0,
          id: 4
      }
    ]
  };

    handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
           score: prevState.players[index].score += delta
        }));
        console.log(index, delta);
    }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  prevPlayerID = 4;
  //Function we are pasing down to the form component
  handleAddPlayer = (name) =>{
     //Represents player state before- can be doen via callback
      this.setState({players:[
          ...this.state.players,
          {
            name:name,
            score: 0,
            id: this.prevPlayerID +1
          }
      ]})
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map((player, index)=>
          <Player score={player.score}
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            index = {index}
            changeScore={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
        )}
        <AddPlayerForm addPlayer= {this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
