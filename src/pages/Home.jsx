import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Main from '../components/main/Main'
import MusicPlayer from '../components/musicPlayer/MusicPlayer'

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <Main />
      <MusicPlayer />
    </div>
  )
}

export default Home