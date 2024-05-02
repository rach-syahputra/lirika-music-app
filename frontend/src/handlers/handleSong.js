export const handlePlay = (songId, dispatch, setCurrentSongId, setIsPlayedId) => {
  dispatch(setCurrentSongId(songId))
  dispatch(setIsPlayedId(songId))
}

export const handleStop = (dispatch, setIsPlayedId) => {
  dispatch(setIsPlayedId(null))
}

export const handleNext = (songs, currentSongId, dispatch, setCurrentSongId, setIsPlayedId) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.songId === currentSongId);
    const nextIndex = (currentIndex + 1) % songs.length;
    dispatch(setCurrentSongId(songs[nextIndex].songId))
    dispatch(setIsPlayedId(songs[nextIndex].songId))
  }
};

export const handlePrev = (songs, currentSongId, dispatch, setCurrentSongId, setIsPlayedId) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.songId === currentSongId);
    const nextIndex = (currentIndex - 1) % songs.length;
    dispatch(setCurrentSongId(songs[nextIndex].songId))
    dispatch(setIsPlayedId(songs[nextIndex].songId))
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