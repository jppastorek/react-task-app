import React from "react";

//the overview will be used simply to display the tasks.

const Overview = (props) => {
  const { tasks, onDeleteTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.text}
            <button
              onClick={(task) => {
                onDeleteTask(task);
              }}
            >
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
