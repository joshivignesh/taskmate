import React from "react";

export const ShowTask = ({ tasksList, setTaskslist, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = tasksList.select((taskTodo) => taskTodo.id === id);
  };

  const handleDelete = (id) => {
    const updatedTaskList = tasksList.filter((taskTodo) => taskTodo.id !== id);
    setTaskslist(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasksList?.length}</span>
        </div>
        <button onClick={() => setTaskslist([])} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {tasksList?.map((taskTodo) => (
          <li key={taskTodo.id}>
            <p>
              <span className="name">{taskTodo.name}</span>
              <span className="time">{taskTodo.time}</span>
            </p>
            <i
              onClickCapture={() => handleEdit(taskTodo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(taskTodo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
