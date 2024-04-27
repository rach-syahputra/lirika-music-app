import React, { createContext, useEffect } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import Rightbar from '../../components/rightbar/Rightbar'
import Navbar from '../../components/navbar/Navbar'
import useHomeState from '../../hooks/useHomeState'
import { handlePlay, handleStop, handleNext, handlePrev } from '../../handlers/handleSong'
import axios from 'axios'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'

export const ContextIsPlayedId = createContext()

const Home = () => {
  const {
    songId,
    setSongId,
    isPlayedId,
    setIsPlayedId,
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
    <div className="container">
      <Sidebar currentPage='home' />
      <div className="mainPage">
        <Navbar />
        <ContextIsPlayedId.Provider value={[isPlayedId, setIsPlayedId]}>
          <div className="mainContent">
            <Main
              songs={songs}
              songId={songId}
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
        </ContextIsPlayedId.Provider>
      </div>
      <MusicPlayer />
    </div>

  )
}

export default Home