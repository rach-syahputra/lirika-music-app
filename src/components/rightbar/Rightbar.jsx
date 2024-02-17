import React from 'react'
import "./rightbar.css"
import Profile from '../profile/Profile'
import MusicPlayer from '../musicPlayer/MusicPlayer'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <Profile />
      <MusicPlayer />
    </div>
  )
}

export default Rightbar