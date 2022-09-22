import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Swap } from './views/Swap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Swap />
  )
}

export default App
