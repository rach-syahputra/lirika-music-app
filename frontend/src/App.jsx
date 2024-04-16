import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import RegisterIdentity from './pages/registerIdentity/RegisterIdentity'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import Explore from './pages/explore/Explore.jsx'
import Search from './pages/search/Search.jsx'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/identity' element={<RegisterIdentity />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/search' element={<Search />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path='/' element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
