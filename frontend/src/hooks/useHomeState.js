import { useState } from "react"

const useHomeState = () => {
  const [songId, setSongId] = useState(0)
  const [isPlayedId, setIsPlayedId] = useState('')
  const [songs, setSongs] = useState([])

  return {
    songId,
    setSongId,
    isPlayedId,
    setIsPlayedId,
    songs,
    setSongs
  }
}

export default useHomeState