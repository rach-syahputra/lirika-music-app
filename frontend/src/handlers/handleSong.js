export const handlePlay = (setIsPlayedId, setSongId, songId) => {
  setIsPlayedId(songId)
  setSongId(songId)
}

export const handleStop = (setIsPlayedId) => {
  setIsPlayedId(null)
}
export const handleNext = (songs, songId, setSongId, setIsPlayedId) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.songId === songId);
    const nextIndex = (currentIndex + 1) % songs.length;
    setSongId(songs[nextIndex].songId);
    setIsPlayedId(songs[nextIndex].songId);
  }

};

export const handlePrev = (songs, songId, setSongId, setIsPlayedId) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.songId === songId);
    const nextIndex = (currentIndex - 1) % songs.length;
    setSongId(songs[nextIndex].songId);
    setIsPlayedId(songs[nextIndex].songId);
  }
};