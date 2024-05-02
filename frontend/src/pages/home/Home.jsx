import React, { useEffect } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import Rightbar from '../../components/rightbar/Rightbar'
import Navbar from '../../components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopSongs } from '../../redux/reducers/songListSlice.js'

const Home = () => {
  const currentSongId = useSelector(state => state.currentSongId.id)
  const dispatch = useDispatch()

  useEffect(() => {
    const getSongs = async () => {
      try {
        // if user just logged in or the page is first time rendered
        if (!currentSongId) {
          dispatch(fetchTopSongs())
        }

        console.log('HOME RENDERED')
        console.log(currentSongId)
      } catch (error) {
        console.log('Home Error ', error.message)
      }
    }
    getSongs();
  }, [])

  return (
    <div className="layout">
      <Sidebar currentPage='home' />
      <div className="mainPage">
        <Navbar />
        <div className="mainContent">
          <Main />
          <Rightbar />
        </div>
      </div>
    </div>
  )
}

export default Home