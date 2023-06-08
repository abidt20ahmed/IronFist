import { useState } from 'react'
import './App.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './authentication/Login'
import Register from './authentication/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flowbite>
      <NavBar></NavBar>
      <Register></Register>


      ...
      <Footer></Footer>
    </Flowbite>

  )
}

export default App
