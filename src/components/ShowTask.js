import React from "react";

export const ShowTask = ({ tasksList, setTaskslist }) => {
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasksList?.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskslist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasksList?.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
