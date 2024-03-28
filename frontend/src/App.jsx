import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import RegisterIdentity from './pages/registerIdentity/RegisterIdentity'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './hooks/authContext'

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path='/' element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register/identity' element={<RegisterIdentity />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
