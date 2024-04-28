export const handlePlay = (songId, setCurrentSelectedSongId, playSong) => {
  playSong(songId)
  setCurrentSelectedSongId(songId)
}

export const handleStop = (playSong) => {
  playSong(null)
}

export const handleNext = (songs, songId, setSongId, playSong) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.songId === songId);
    const nextIndex = (currentIndex + 1) % songs.length;
    setSongId(songs[nextIndex].songId);
    playSong(songs[nextIndex].songId);
  }
};

export const handlePrev = (songs, songId, setSongId, playSong) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.songId === songId);
    const nextIndex = (currentIndex - 1) % songs.length;
    setSongId(songs[nextIndex].songId);
    playSong(songs[nextIndex].songId);
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