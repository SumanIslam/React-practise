import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// styles
import './Navbar.css'

class Navbar extends Component {
  handleLogin = () => {
    alert("You Logged In!!");
    this.props.history.push("/food/salmon");
  };
  render() {
    return (
      <div className="Navbar">
        <button onClick={this.handleLogin}>Log IN</button>
        <button onClick={this.props.history.goBack}>Go Back!</button>
        <button onClick={this.props.history.goForward}>Go Forward!</button>
      </div>
    );
  }
}

export default withRouter(Navbar);
