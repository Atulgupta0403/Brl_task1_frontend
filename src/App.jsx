import { useState } from 'react'
import Notes from './pages/notes'
import Show from './pages/Show'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Notes />
      <Show />
    </>
  )
}

export default App
