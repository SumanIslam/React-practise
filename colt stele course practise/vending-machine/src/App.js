// dependencies
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// styles
import "./App.css";

// component
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import Navbar from "./Navbar";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/sardines" render={() => <Sardines />} />
          <Route exact path="/Soda" render={() => <Soda />} />
        </Switch>
      </div>
    );
  }
}
