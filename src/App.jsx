import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
      
        <div>
          <h1>Muniganti Ramesh</h1>
          <p>
            EC2 instance is running and the React app is deployed successfully. You can now access the application through the public IP address of your EC2 instance.
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
