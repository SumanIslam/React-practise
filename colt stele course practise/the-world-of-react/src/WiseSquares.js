import React, { Component } from "react";
import "./WiseSquares.css";

class WiseSquares extends Component {
  dispenseWisdom() {
    let messages = [
      "A fool think himself to be wise, but a wise man knows himself a fool.",
      "Educating the mind without educating the heart is no education at all.",
      "Not everything that is faced can be changed, but nothing can be changed until it is faced",
    ];
    let index = Math.floor(Math.random() * messages.length);
    console.log(messages[index]);
  }
  render() {
    return (
      <div className="WiseSquares" onMouseEnter={this.dispenseWisdom}>
        <span role="img" aria-label="smiley">😃</span>
      </div>
    );
  }
}

export default WiseSquares;
