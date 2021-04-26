// dependencies
import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

// css style
import "./App.css";

// Component
import Dog from "./Dog";
import About from "./About";
import Contact from "./Contact";
import FakeRouting from "./FakeRouting";

// Functional Component
const Hater = () => <h1>I Absolutely hate dogs!!!</h1>;
// Run
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink to="/" activeClassName="active-link" exact>
            About
          </NavLink>
          <NavLink to="/dog" activeClassName="active-link" exact>
            Dog
          </NavLink>
          <NavLink to="/dog/c" activeClassName="active-link" exact>
            Dog(c)
          </NavLink>
          <NavLink to="/dog/r" activeClassName="active-link" exact>
            Dog(r)
          </NavLink>
          <NavLink to="/dog/hater" activeClassName="active-link" exact>
            Dog Hater
          </NavLink>
          <NavLink to="/contact" activeClassName="active-link" exact>
            Contact
          </NavLink>
          {/* <a href="/">About</a>
          <a href="/dog">Dog</a>
          <a href="/dog/hater">Dog Hater</a>
          <a href="/contact">Contact</a> */}
        </nav>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/dog" exact component={Dog} />
          <Route path="/dog/c" exact component={() => <Dog name="Muffins" />} />
          <Route path="/dog/r" exact render={() => <Dog name="Biscuits" />} />
          <Route path="/dog/hater" exact component={Hater} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
