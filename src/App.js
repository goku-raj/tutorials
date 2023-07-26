import { useState } from 'react';
import './App.css';

function App() {
  const [ num , setNum] = useState(0)
  const increase =()=>{
    return setNum( num +1);
  };
  const decrease =()=>{
     return setNum( num -1);
  };
  const reset =()=>{
    return setNum(0);
  };
  return (
    <div className="App">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      
      <div>
      {num}
      </div>
    </div>
  );
}

export default App;
