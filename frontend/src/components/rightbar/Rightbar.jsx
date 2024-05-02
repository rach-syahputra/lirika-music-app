import React from 'react'
import "./rightbar.css"
import HomeMusicPlayer from '../homeMusicPlayer/HomeMusicPlayer'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <HomeMusicPlayer
      // songs={songs}
      />
    </div>
  )
}

export default Rightbar