import React, { Component } from 'react'
import './Todo.css'

export default class Todo extends Component {
  render() {
    return (
      <div className="Todo">
        <p>{this.props.todoItem}</p>
        <div className="Todo-icon">
          <i class="fas fa-pen"></i>
          <i class="fas fa-trash"></i>
        </div>
      </div>
    );
  }
}
