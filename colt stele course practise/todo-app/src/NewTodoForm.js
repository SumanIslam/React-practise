import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <form>
        <label htmlFor="todo">New Todo</label>
        <input
          type="text"
          id="todo"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChange}
          placeholder="New Todo.."
        ></input>
      </form>
    );
  }
}
