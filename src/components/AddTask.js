import React from "react";

export const AddTask = ({ tasksList, setTaskslist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    //setTaskslist([...tasksList, newTask]);
    setTaskslist([...tasksList, newTask]);
    //setTaskslist((tasksList) => [...tasksList, newTask]); // This correctly creates a new array.
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          maxLength="25"
          placeholder="add task.."
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
