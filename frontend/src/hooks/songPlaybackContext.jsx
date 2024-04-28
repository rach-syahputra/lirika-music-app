import { createContext, useState } from "react";

export const SongPlaybackContext = createContext()

export const SongPlaybackProvider = ({ children }) => {
  const [isPlayedId, setIsPlayedId] = useState(null)

  const playSong = (songId) => {
    setIsPlayedId(songId)
  }

  return (
    <SongPlaybackContext.Provider value={{ isPlayedId, playSong }}>
      {children}
    </SongPlaybackContext.Provider>
  )
}