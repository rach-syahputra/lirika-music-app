import React, { createContext, useEffect, useState } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import Rightbar from '../../components/rightbar/Rightbar'
import Navbar from '../../components/navbar/Navbar'
import useHomeState from '../../hooks/useHomeState'
import { handlePlay, handleStop, handleNext, handlePrev } from '../../handlers/handleSong'

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
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/songs");
        const data = await response.json()

        setSongs(data)

        const mostPlayedSong = data.reduce((maxObj, obj) => (obj.playedCount > maxObj.playedCount ? obj : maxObj));
        setSongId(mostPlayedSong.id)

      } catch (error) {
        console.log(error.message)
      }
    }

    fetchData();
  }, [])

  return (
    <div className="container">
      <Sidebar />
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
    </div>
  )
}

export default Home