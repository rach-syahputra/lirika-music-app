export const handlePlay = (setSongId, songId, playSong) => {
  playSong(songId)
  setSongId(songId)
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