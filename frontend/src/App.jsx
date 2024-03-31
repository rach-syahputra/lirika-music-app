import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import RegisterIdentity from './pages/registerIdentity/RegisterIdentity'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import { AuthContextProvider, AuthContext } from './hooks/authContext'
import { useContext } from 'react'

function App() {

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          {/* <Route element={<PrivateRoutes />}>
            <Route exact path='/' element={<Home />} />
          </Route> */}
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route exact path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/register/identity' element={<RegisterIdentity />} />
          </Route>
        </Routes>
      </Router>
    </AuthContextProvider>
  )
}

export default App
