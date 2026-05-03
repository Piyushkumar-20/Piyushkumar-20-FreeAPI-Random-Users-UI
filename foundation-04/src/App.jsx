import {useState} from "react";
import './App.css'

function App() {
  const [value, setValue] = useState(5)
  //let value = 5;

  const increase = () => {
    setValue(value + 1) // not so good
  }
  const decrease = () => {
    setValue(value - 1) // not so good
  }
  return (
    <>
     <div>
      <h1>Value: {value}</h1>
      <button onClick = {increase}>😎</button>
      <button onClick = {decrease}>🐛</button>
     </div>
    </>
  )
}

export default App
