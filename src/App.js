import './App.css';

function App() {

  function handleAdd(){
    count+=1
  }

  let count = 0;
  return (
    <div className='App'>
        <div className="box">
          <p> {count}</p>
          <button className='add' onClick={handleAdd}>ADD</button>
          <button className='sub' onClick={handleAdd}>SUB</button>
        </div>
      </div>
  );
}

export default App;


