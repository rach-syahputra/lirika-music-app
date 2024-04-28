import React, { createContext, useEffect } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import Rightbar from '../../components/rightbar/Rightbar'
import Navbar from '../../components/navbar/Navbar'
import useHomeState from '../../hooks/useHomeState'
import { handlePlay, handleStop, handleNext, handlePrev } from '../../handlers/handleSong'
// import { handlePlay, handleStop } from '../../handlers/handleSong'
import axios from 'axios'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'
import { SongPlaybackProvider } from '../../hooks/songPlaybackContext'

export const ContextIsPlayedId = createContext()

const Home = () => {
  const {
    songId,
    setSongId,
    songs,
    setSongs
  } = useHomeState()

  useEffect(() => {
    const getSongs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/song/")

        const songs = res.data
        setSongs(songs)

        // find the mostplayed song ID then store it to songId state
        const mostPlayedSong = songs.reduce((maxObj, obj) => (obj.playedCount > maxObj.playedCount ? obj : maxObj));
        setSongId(mostPlayedSong.songId)
      } catch (error) {
        console.log('Home', error.message)
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
          <Main
            setSongId={setSongId}
            handlePlay={handlePlay}
            handleStop={handleStop}
          />
          <Rightbar
            songs={songs}
            songId={songId}
            setSongId={setSongId}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handlePlay={handlePlay}
            handleStop={handleStop}
          />
        </div>
      </div>
    </div>
  )
}

export default Home