import React, { Component } from 'react';
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor(){
    super();
    this.state = {
      
      task : {task: '',counter : 1},
      tasks : [],
      id: uniqid()
    };
  }
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        counter : this.state.task.counter
      }
    });
  };
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: ' ' ,counter : this.state.task.counter + 1}
      
    });
  };
  // onDeleteTask = (e)=>{
  //   this.setState({
  //   task : this.state.tasks.splice(this.state.task.counter,1)
  //   });
  // }
  render() {
    const {task ,tasks} = this.state;
    return (
    <div>
      <form onSubmit={this.onSubmitTask}>
      <label htmlFor="taskInput">Enter task</label>
      <input
        onChange={this.handleChange}
        value={task.text}
        type="text"
        id="taskInput"
      />
          <button type="submit">
            Add Task
          </button>
      </form>
      <Overview tasks={tasks} />
    </div>
    );
  }
}
export default App;
