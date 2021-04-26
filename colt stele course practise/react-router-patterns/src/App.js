// dependencies
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// styles
import "./App.css";

// Components
import Food from "./Food";
import FoodSearch from "./FoodSearch";
import Meal from "./Meal";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/food/:name"
            render={(routeProps) => <Food {...routeProps} />}
          />
          <Route
            exact
            path="/food/:foodName/drink/:drinkName"
            component={Meal}
          />
          <Route exact path="/" component={FoodSearch} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
