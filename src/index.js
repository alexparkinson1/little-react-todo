
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './index.css';
import TodoList from './components/TodoList';
import registerServiceWorker from './registerServiceWorker';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: []};
  }
  render() {
    return (
      <div className="TodoApp">
        <h3>My ToDo List</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="task"/>
          <input type="submit" value="Add"/>
        </form>
        <TodoList onDelete={this.handleDelete.bind(this)} tasks={this.state.tasks} />
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    let tasks = this.state.tasks;
    let newTask = {
      text: this.refs.task.value,
      id: Date.now()
    };

    tasks.push(newTask);
    this.setState({tasks: tasks})
    this.refs.task.value = "";
  }

  handleDelete(id) {
    let tasks = this.state.tasks;
    let index = tasks.findIndex(x => x.id === id);
    tasks.splice(index, 1);

    this.setState({tasks: tasks})
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
registerServiceWorker();
