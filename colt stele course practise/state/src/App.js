import React, { Component } from 'react';
import Game from './Game';
import Demo from './Demo';
import Random from './Random';
import './App.css';
import Button from './Button';
import BrokenClick from './BorkenClick';
import BrokenClick2 from './BrokenClick2';
import StateClicker from './StateClicker';

class App extends Component {
  render() {
    return (
      <div className="App">
       <StateClicker />
      </div>
    );
  }
}

export default App;
