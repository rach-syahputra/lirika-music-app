import React, { createContext, useEffect, useState } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import Rightbar from '../../components/rightbar/Rightbar'
import Navbar from '../../components/navbar/Navbar'

export const ContextIsPlayedId = createContext()

const Home = () => {
  const [songId, setSongId] = useState("")
  const [isPlayedId, setIsPlayedId] = useState('')
  const [songs, setSongs] = useState([])

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

  const handlePlay = (songId) => {
    setIsPlayedId(songId)
    setSongId(songId)
  }

  const handleStop = () => {
    setIsPlayedId(null)
  }

  const handleNext = () => {
    const currentIndex = songs.findIndex((item) => item.id === songId);
    const nextIndex = (currentIndex + 1) % songs.length;
    setSongId(songs[nextIndex].id);
    setIsPlayedId(songs[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = songs.findIndex((item) => item.id === songId);
    const nextIndex = (currentIndex - 1) % songs.length;
    setSongId(songs[nextIndex].id);
    setIsPlayedId(songs[nextIndex].id);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="mainPage">
        <Navbar />
        <ContextIsPlayedId.Provider value={[isPlayedId, setIsPlayedId]}>
          <div className="mainContent">
            <Main
              songs={songs}
              handlePlay={handlePlay}
              handleStop={handleStop}
            />
            <Rightbar
              songId={songId}
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