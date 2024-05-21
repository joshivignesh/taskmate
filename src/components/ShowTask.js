import React from "react";

const ShowTask = () => {
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear All</button>
      </div>
      <ul>
        <li>
          <p>
            <span className="name">Task 1</span>
            <span className="time">2024-05-21T10:36:49Z</span>
          </p>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </li>
        <li>
          <p>
            <span className="name">Task 2</span>
            <span className="time">2024-05-21T10:36:49Z</span>
          </p>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </li>
        <li>
          <p>
            <span className="name">Task 3</span>
            <span className="time">2024-05-21T10:36:49Z</span>
          </p>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash"></i>
        </li>
      </ul>
    </section>
  );
};

export default ShowTask;
