import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink activeClassName="active-link" exact to="/">Home</NavLink>
        <NavLink activeClassName="active-link" exact to="/soda">Soda</NavLink>
        <NavLink activeClassName="active-link" exact to="/sardines">Sardines</NavLink>
        <NavLink activeClassName="active-link" exact to="/chips">Chips</NavLink>
      </div>
    );
  }
}

export default Navbar;