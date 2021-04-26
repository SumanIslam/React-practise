// dependency
import React, { Component } from "react";
import { Link } from "react-router-dom";

// components
// import Food from "./Food";

class FoodSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { query: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handelClick = this.handelClick.bind(this);
  }

  handleChange(evt) {
    this.setState({query: evt.target.value})
  }

  handelClick() {
    // do something first
    alert("A food is saved to DB!");
    // redirect somewhere else
    this.props.history.push(`/food/${this.state.query}`)
  }

  render() {
    return (
      <div>
        <h1>Search Foods</h1>
        <input type="text" placeholder="Search for foods" value={this.state.query} onChange={this.handleChange} />
        <Link to={`/food/${this.state.query}`}>Go</Link>
        <button onClick={this.handelClick}>Save new food</button>
      </div>
    );
  }
}

export default FoodSearch;
