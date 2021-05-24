import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [windowWidth, setwindowWidth] = useState([window.innerWidth]);
  // useEffect hook takes 2 parameters first is a function which renders whenever there is a change in the resource defined in the array which is taken as a second parameter.
  // So if there is a change in any other component, then useEffect hook will not re render the page.

  const handleResize = ()=>{
    setwindowWidth(window.innerWidth); 
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
  }, [])

  return (
    <div className="App">
      <h1>{windowWidth}</h1>
    </div>
  );
}

export default App;
