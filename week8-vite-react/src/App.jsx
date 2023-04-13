import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@mui/material'
import { Main, Navbar } from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main/>
      <Navbar/>
    </div>
  )
}

export default App
