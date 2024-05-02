import { createContext, useEffect, useState } from "react";

export const SongPlaybackContext = createContext()

export const SongPlaybackProvider = ({ children }) => {
  const [isPlayedId, setIsPlayedId] = useState(
    JSON.parse(localStorage.getItem('isPlayedId')) || null
  )
  const [currentSongId, setCurrentSongId] = useState(
    JSON.parse(localStorage.getItem('currentSongId')) || null
  )

  useEffect(() => {
    localStorage.setItem('isPlayedId', JSON.stringify(isPlayedId))
    localStorage.setItem('currentSongId', JSON.stringify(currentSongId))
  }, [isPlayedId, currentSongId])

  const playSong = (songId) => {
    setIsPlayedId(songId)
  }

  const setCurrentSelectedSongId = (songId) => {
    setCurrentSongId(songId)
  }

  return (
    <SongPlaybackContext.Provider value={{ isPlayedId, playSong, currentSongId, setCurrentSelectedSongId }}>
      {children}
    </SongPlaybackContext.Provider>
  )
}