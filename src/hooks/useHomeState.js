import { useState } from "react"

const useHomeState = () => {
  const [songId, setSongId] = useState("")
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