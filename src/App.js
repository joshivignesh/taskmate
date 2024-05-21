import { useState } from 'react';
import './App.css';
import Header  from './components/Header'
import AddTask from './components/AddTask'
import ShowTask from './components/ShowTask'

function App() {
  const [tasks, setTasks] = useState([{id:5247, name: "React coding", completed: false}, 
                                      {id:6268, name: "Angular coding", completed: true}, 
                                      {id:5879, name: ".NET API coding", completed: true}])

 
  return (
    <div className='App'>
     <Header> </Header>
     <AddTask />
     <ShowTask />
      </div>
  );
}

export default App;


