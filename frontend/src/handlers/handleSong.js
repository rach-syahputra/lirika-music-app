export const handlePlay = (songId, setCurrentSongId, setIsPlayedId, dispatch) => {
  dispatch(setCurrentSongId(songId))
  dispatch(setIsPlayedId(songId))
}

export const handleStop = (setIsPlayedId, dispatch) => {
  dispatch(setIsPlayedId(null))
}

export const handleNext = (songs, currentSongId, setCurrentSongId, setIsPlayedId, dispatch) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.songId === currentSongId);
    const nextIndex = (currentIndex + 1) % songs.length
    dispatch(setCurrentSongId(songs[nextIndex].songId))
    dispatch(setIsPlayedId(songs[nextIndex].songId))
    console.log('CURRENT SONG', songs[currentIndex])
    console.log('NEXT SONG', songs[nextIndex])
  }
};

export const handlePrev = (songs, currentSongId, setCurrentSongId, setIsPlayedId, dispatch) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.songId === currentSongId);
    const prevIndex = currentIndex === 0 ? songs.length - 1 : (currentIndex - 1) % songs.length
    dispatch(setCurrentSongId(songs[prevIndex].songId))
    dispatch(setIsPlayedId(songs[prevIndex].songId))
  }
};

export const handleToggleLike = (likedIds, setlikedIds, songId) => {
  if (likedIds.includes(songId)) {
    setlikedIds(likedIds.filter((id) => id !== songId))
  } else {
    setlikedIds([...likedIds, songId])
  }
}

export const isLiked = (likedIds, songId) => {
  return likedIds.includes(songId)
}