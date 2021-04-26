import React, { Component } from "react";
import axios from 'axios';

export default class ZenQuote extends Component {
  constructor(props) {
    console.log("Inside constructor");
    super(props);
    this.state = {data: ""}
  }
  componentDidMount() {
    console.log("Inside component did mount");
    //load data
    axios.get("https://api.github.com/zen").then(res => {
      this.setState({data: res.data})
    })
    //set data
  }
  componentDidUpdate(){
    console.log("Inside component did update")
  }
  render() {
    console.log("Inside render");
    return (
      <div>
        <h1>Always remember...</h1>
        <p>{this.state.data}</p>
      </div>
    );
  }
}
