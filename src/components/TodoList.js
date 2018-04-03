import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => (
          <li key={task.id}>{task.text} <a href="#" onClick={this.deleteTask.bind(this, task.id)}>Delete</a></li>
        ))}
      </ul>
    );
  }

  deleteTask(id) {
    this.props.onDelete(id);
  }
}
export default TodoList;
