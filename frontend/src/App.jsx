import Home from './pages/home/Home'
import { Routes, Route, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import RegisterIdentity from './pages/registerIdentity/RegisterIdentity'
import ProtectedRoute from './utils/ProtectedRoute.jsx'
import Explore from './pages/explore/Explore.jsx'
import Search from './pages/search/Search.jsx'
import { useEffect } from 'react'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import ArtistPage from './pages/artist/ArtistPage.jsx'
import ArtistSongs from './pages/artistSongs/ArtistSongs.jsx'
import AlbumSongs from './pages/albumSongs/AlbumSongs.jsx'
import Profile from './pages/profile/Profile.jsx'



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

  // useEffect(() => {
  //   console.log('CURRENT SONG ID', currentSongId)
  //   console.log('IS PLAYED ID', isPlayedId)
  //   console.log('SONG LIST', songList)
  // }, [songList])

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/identity' element={<RegisterIdentity />} />
        <Route path='/profile' element={<Profile />} />

        <Route element={<ProtectedRoute />}>

          <Route exact path='/' element={
            <Provider store={store}>
              <Home />
            </Provider>
          } />
          <Route path='/explore' element={
            <Provider store={store}>
              <Explore />
            </Provider>
          } />
          <Route path='/search' element={
            <Provider store={store}>
              <Search />
            </Provider>
          } />
          <Route path='/artist/:artistId' element={
            <Provider store={store}>
              <ArtistPage />
            </Provider>
          } />
          <Route path='/artist/:artistId/songs' element={
            <Provider store={store}>
              <ArtistSongs />
            </Provider>
          } />
          <Route path='/album/:albumId/songs' element={
            <Provider store={store}>
              <AlbumSongs />
            </Provider>
          } />
        </Route>
      </Routes>
    </div>
  )
}

export default App
