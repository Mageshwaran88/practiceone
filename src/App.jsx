import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { ToDoForm } from './ToDoProject/ToDoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <ToDoForm/>
   </div>
  )
}

export default App
