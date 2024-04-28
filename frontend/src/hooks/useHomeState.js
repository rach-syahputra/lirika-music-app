import { useState } from "react"

const useHomeState = () => {
  const [songId, setSongId] = useState(null)
  const [songs, setSongs] = useState([])

  return {
    songId,
    setSongId,
    songs,
    setSongs
  }
}

export default useHomeState