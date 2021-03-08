import React, { Component } from 'react'

class Game extends Component {
    state = {
      score: 25,
      gameOver: false
  }
  render() {
    return(
      <div>
        <h1>My score is {this.state.score}</h1>
      </div>
    )
  }
}

export default Game;