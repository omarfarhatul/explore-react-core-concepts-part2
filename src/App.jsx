import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {

  function handleClick(){
    alert('Button clicked!');
  }

  const handleClick2 = () =>{
    alert('Button 2 clicked!');
  }

  const addToFive = (n) =>{
    alert(n+5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      
      <Users></Users>

      <Counter></Counter>

      <Team></Team>

      <div>
        <button onClick={handleClick}>Click Me!</button>
        <button onClick={handleClick2}>Click Me 2!</button>
        <button onClick={() =>{
        alert('Button 3 clicked!')}}>Click Me 3!</button>
        <button onClick={() =>addToFive(3)}>Four</button>
      </div>
    </>
  )
}

export default App
