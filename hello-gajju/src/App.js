import logo from './logo.svg';
import './App.css';
import React , { useState } from 'react';


const Counter =() =>{
  const [state,setState]=useState(0);
  const [data,setData]=useState([0]);
  const Inc=()=>{
    setState(state+1);
    const datadummy=[...data];
    datadummy.push(state+1);
    setData(datadummy);
    
  }
  const Dec=()=>{
    setState(state-1);
    const datadummy=[...data];
    datadummy.push(state-1);
    setData(datadummy);
  }
  return(
    <div>
      <button onClick={Dec}>-</button>
      <span>{state}</span>
      {console.log(data)}
      <button onClick={Inc}>+</button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
        <Counter/>
    </div>
  );
}

export default App;
