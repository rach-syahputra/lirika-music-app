import React from 'react'
import "./rightbar.css"
import Profile from '../profile/Profile'
import HomeMusicPlayer from '../homeMusicPlayer/HomeMusicPlayer'

const Rightbar = ({ songs, songId, setSongId, handleNext, handlePrev, handlePlay, handleStop }) => {
  return (
    <div className='rightbar'>
      <HomeMusicPlayer
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