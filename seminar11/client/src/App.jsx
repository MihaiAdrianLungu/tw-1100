import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Homepage'
import Login from './Login'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<div>Page not found</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
