import React, { Component } from "react";
import uniqid from "uniqid";

import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
      },
    });
  };

  onDeleteTask = (e) => {
    this.setState({ 
      tasks: this.state.tasks.filter((task) => {
        return task.text !== e.target.value;
      })
    })
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <>
        <h2>Task App built with React.js!</h2>
        <form>
          <label htmlFor="taskInput">Add a new task</label>
          <input
            type="text"
            id="taskInput"
            onChange={this.handleChange}
            value={task.text}
          />
          <button type="submit" onClick={this.onSubmitTask}>
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} onDeleteTask={this.onDeleteTask} />
      </>
    );
  }
}

export default App;
