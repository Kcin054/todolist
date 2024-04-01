import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputValue from './InputValue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputValue/>
    </>
  )
}

export default App
