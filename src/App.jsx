import { useState } from 'react'
import './App.css'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './authentication/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Flowbite>
      <NavBar></NavBar>
      <Login></Login>


      ...
      <Footer></Footer>
    </Flowbite>

  )
}

export default App
