import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([{id:5247, name: "React coding", completed: false}, 
                                      {id:6268, name: "Angular coding", completed: true}, 
                                      {id:5879, name: ".NET API coding", completed: true}])

 
  return (
    <div className='App'>
      </div>
  );
}

export default App;


