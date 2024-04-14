import Home from './pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import RegisterIdentity from './pages/registerIdentity/RegisterIdentity'
import Search from './pages/search/Search.jsx'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import SearchResult from './pages/searchResult/SearchResult.jsx'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/identity' element={<RegisterIdentity />} />
        <Route path='/search' element={<Search />} />
        <Route path='/searchResult' element={<SearchResult />} />
        <Route element={<ProtectedRoute />}>
          <Route exact path='/' element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
