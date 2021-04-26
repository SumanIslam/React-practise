import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    console.log("In constructor");
  }
  componentDidMount() {
    console.log("In component did mount");
    this.timerId = setInterval(() => {
      this.setState({time: new Date()})
    }, 1000);
  }
  render() {
    console.log("IN render");
    return <h1>{this.state.time.getSeconds()}</h1>;
  }
}
