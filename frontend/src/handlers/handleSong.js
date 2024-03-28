export const handlePlay = (setIsPlayedId, setSongId, songId) => {
  setIsPlayedId(songId)
  setSongId(songId)
}

export const handleStop = (setIsPlayedId) => {
  setIsPlayedId(null)
}
export const handleNext = (songs, songId, setSongId, setIsPlayedId) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.id === songId);
    const nextIndex = (currentIndex + 1) % songs.length;
    setSongId(songs[nextIndex].id);
    setIsPlayedId(songs[nextIndex].id);
  }

};

export const handlePrev = (songs, songId, setSongId, setIsPlayedId) => {
  if (songs && songs.length > 0) {
    const currentIndex = songs.findIndex((item) => item.id === songId);
    const nextIndex = (currentIndex - 1) % songs.length;
    setSongId(songs[nextIndex].id);
    setIsPlayedId(songs[nextIndex].id);
  }
};