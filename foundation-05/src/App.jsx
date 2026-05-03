// 1. Add useEffect to your imports
import { useState, useEffect } from 'react' 
import './App.css'

function App() {
  // const [posts, setPosts] = useState(0)
  // const [status, setStatus] = useState("idle")
  const [seconds, setSeconds] = useState(10)

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((current) => Math.max(current - 1, 0))
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  return (
    <>
      <div>
        <h1>useEffect</h1>
        <h2>{seconds}</h2>
        {/* 2. Added a simple check to show when time is up */}
        {seconds === 0 && <p>Time's up!</p>}
      </div>
    </>
  )
}

export default App
