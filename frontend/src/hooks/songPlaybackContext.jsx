import { createContext, useState } from "react";

export const SongPlaybackContext = createContext()

export const SongPlaybackProvider = ({ children }) => {
  const [isPlayedId, setIsPlayedId] = useState(null)
  const [currentSongId, setCurrentSongId] = useState(null)

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