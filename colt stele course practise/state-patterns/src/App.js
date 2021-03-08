import React, { Component } from 'react';
import './App.css';
import IconList from './IconL,ist';
import Lottery from './Lottery';
import ScoreKeeper from './ScoreKeeper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lottery title="Lotto" NumBall={6} MaxNum={40} />
      </div>
    );
  }
}

export default App;
