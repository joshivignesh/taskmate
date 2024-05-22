import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

function App() {
  const [tasksList, setTaskslist] = useState([]);

  return (
    <div className="App">
      <Header> </Header>
      <AddTask taskslists={tasksList} setTaskslist={setTaskslist} />
      <ShowTask taskslists={tasksList} setTaskslist={setTaskslist} />
    </div>
  );
}

export default App;
