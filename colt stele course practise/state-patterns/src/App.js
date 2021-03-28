import React, { Component } from 'react';
import './App.css';
import IconList from './IconL,ist';
import Lottery from './Lottery';
import Lottery2 from './Lottery2';
import LotteryBall2 from './LotteryBall2';
import ScoreKeeper from './ScoreKeeper';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Lottery title="Lotto" NumBall={6} MaxNum={40} /> */}
        <Lottery2 />
        <Lottery2 title="Mini Daily" numOfBall={4} maxNum={10}/>
      </div>
    );
  }
}

export default App;
