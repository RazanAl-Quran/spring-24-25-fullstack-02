import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Greetings from './Greetings';
import People from './People';

function App() {

  const [count,setCount] = useState(0);

  const handleClick = () =>{
    setCount(count+1);
  }

  // const count = 0;
  // const handleClick = () =>{
  //   count = count+1;
  // }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 React Basics Demo</h1>
      <p>you clicked the button {count} times</p>
      <button onClick={handleClick}>Click Me</button>
      <Greetings username="Sara" />

      <People/>

    </div>
  );
}

export default App;
