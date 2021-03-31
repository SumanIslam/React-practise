import React, { Component } from "react";
import "./TodoList.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { todoItem: "going to market", id: 1 },
        { todoItem: "going to shopping", id: 2 },
        { todoItem: "going to masjid", id: 3 },
      ],
    };
  }
  render() {
    const todos = this.state.todos.map(todo => (
      <Todo todoItem={todo.todoItem}/>
    ))
    return (
      <div className="TodoList">
        <h1>Todo List!</h1>
        <h5>A Simple React Todo List App</h5>
        {todos}
        <NewTodoForm />
      </div>
    );
  }
}
