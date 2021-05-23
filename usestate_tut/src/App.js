import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

// function updateIt(){
//   console.log("run function")
//   return 3
// }

function App() {
  const [count, setCount] = useState(()=>{
    console.log("run function")
    return 3
  });
  // first thing in arr is the current state and the second is the function which defines how to update the current state. usestate(<defines the default value of our state>)

  // the default value of usestate is passed every time when we use it as it is which can make our program slow at time of large computation. So use a functional approach to do it and create a function in usestate to just pass the default value once.

  function decrementCount(){
    setCount( prevCount => prevCount - 1
      // every time we use previous value of state to create new value, we have to use the function version to do it rather than directly changing it. 
      // like instead of using setCount(count-1), we are using it via a function call. 
    )
  }

  function incrementCount(){
    setCount( prevCount => prevCount + 1)
  }

  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
