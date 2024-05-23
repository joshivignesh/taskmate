import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

function App() {
  const [tasksList, setTaskslist] = useState([]);
  const [task, setTask] = useState();

  return (
    <div className="App">
      <Header> </Header>
      <AddTask
        tasksList={tasksList}
        setTaskslist={setTaskslist}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        tasksList={tasksList}
        setTaskslist={setTaskslist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
