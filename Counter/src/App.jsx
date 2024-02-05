import Chai from "./Chai"
import { useState } from "react";
function App() {

  let [counter, setCounter] = useState(15)
  const addValue = () => {
    if(counter<20)setCounter(counter+1);
    console.log("clicked", counter);
  }
  const remValue = () => {
    if(counter>0) setCounter(counter-1);
    console.log("clicked", counter);
  }
  return (
    <>
      <h1>Learn React | Thiyaneswaran</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={remValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
      <Chai />
    </>
    
  )
}

export default App
