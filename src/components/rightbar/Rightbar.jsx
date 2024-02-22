import React from 'react'
import "./rightbar.css"
import Profile from '../profile/Profile'
import MusicPlayer from '../musicPlayer/MusicPlayer'

const Rightbar = ({ songId, setSongId, handleNext, handlePrev, handlePlay, handleStop }) => {
  return (
    <div className='rightbar'>
      <MusicPlayer
        songId={songId}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handlePlay={handlePlay}
        handleStop={handleStop}
      />
    </div>
  )
}

export default Rightbar