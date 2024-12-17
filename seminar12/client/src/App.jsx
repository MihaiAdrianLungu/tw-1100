import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import useCheckToken from './hooks/useCheckToken';
import { useSelector } from 'react-redux';
import Profile from './pages/Profile';

function App() {
  const { checkTokenLoading, loggedIn } = useSelector((state) => state.global);

  useCheckToken();

  return (
    <div>
      <Router>
        <Routes>
          {checkTokenLoading ? 
            <Route path='*' element={<div>Spinner</div>} />
            :
            <>
              <Route path='/' element={<Homepage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={loggedIn ? <Profile/> : <Navigate to='/login'/>} />
              <Route path='*' element={<div>Page not found</div>} />
            </>
          }
        </Routes>
      </Router>
    </div>
  )
}

export default App
