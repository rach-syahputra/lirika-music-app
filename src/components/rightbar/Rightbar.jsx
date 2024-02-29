import React from 'react'
import "./rightbar.css"
import Profile from '../profile/Profile'
import MusicPlayer from '../musicPlayer/MusicPlayer'

const Rightbar = ({ songs, songId, setSongId, handleNext, handlePrev, handlePlay, handleStop }) => {
  return (
    <div className='rightbar'>
      <MusicPlayer
        songs={songs}
        songId={songId}
        setSongId={setSongId}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handlePlay={handlePlay}
        handleStop={handleStop}
      />
    </div>
  )
}

export default Rightbar