import { useState , lazy } from 'react'
import Notes from './pages/Notes'
import Show from './pages/Show'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Edit from './pages/Edit';
const Edit = lazy(() => import("./pages/Edit"))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/edit" element={<Edit />} />
          <Route path="/" element={
            <>
            <Notes />
            <Show />
            </>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App
