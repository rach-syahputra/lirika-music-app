import React from 'react'
import "./rightbar.css"
import HomeMusicPlayer from '../homeMusicPlayer/HomeMusicPlayer'

const Rightbar = ({ songs, handleNext, handlePrev, handlePlay, handleStop }) => {
  return (
    <div className='rightbar'>
      <HomeMusicPlayer
        songs={songs}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handlePlay={handlePlay}
        handleStop={handleStop}
      />
    </div>
  )
}

export default Rightbar