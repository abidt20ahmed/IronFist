import { useState } from 'react'
import './App.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flowbite>
      <NavBar></NavBar>
      ...
      <div>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h1 className=' dark:text-red-500'>sadkfjdsfkdsajfdsak</h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <DarkThemeToggle />
      ...
    </Flowbite>

  )
}

export default App
