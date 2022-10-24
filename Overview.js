import React from "react";

const Overview = (props) => {
  const { tasks } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return <li>{task.counter +" "+ task.text} <button onClick={this.onDeleteTask}> Delete Task</button></li>;
      })}
      
    </ul>
  );
};

export default Overview;