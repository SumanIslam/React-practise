import React, { Component } from 'react';
import './App.css';
import MultipleForm from './MultipleForm';
import NameForm from './NameForm';
import ShoppingList from './ShoppingList';

class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <NameForm />
       <MultipleForm /> */}
        <ShoppingList />
      </div>
    );
  }
}

export default App;
