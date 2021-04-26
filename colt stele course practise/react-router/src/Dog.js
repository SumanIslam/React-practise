import React, { Component } from 'react'

export default class Dog extends Component {
  componentDidMount() {
    console.log("Dog Did Mount");
  }
  componentWillUnmount() {
    console.log("Dog Will Unmount");
  }
  render() {
    console.log("Dog Render");
    return (
      <div className="Dog">
        <h1>Dog!!!</h1>
        <h3>This dog is named: {this.props.name}</h3>
        <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" />
      </div>
    );
  }
}
