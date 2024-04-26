import Home from './pages/home/Home'
import { Routes, Route, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import RegisterIdentity from './pages/registerIdentity/RegisterIdentity'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import Explore from './pages/explore/Explore.jsx'
import Search from './pages/search/Search.jsx'
import { useEffect } from 'react'



function App() {
  const location = useLocation()
  const currentPath = location.pathname
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q')
  const navigate = useNavigate()

  useEffect(() => {
    // if there is no search query parameter in the url, direct to home
    if (currentPath === '/search' && !searchQuery) {
      navigate('/')
    }
    console.log('currentPath: ', currentPath)
  }, [currentPath])

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/identity' element={<RegisterIdentity />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
