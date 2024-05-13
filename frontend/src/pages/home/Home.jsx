import React, { useEffect } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import HomeContent from '../../components/homeContent/HomeContent'
import Navbar from '../../components/navbar/Navbar'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="layout">
      <Sidebar currentPage='home' />
      <div className="home-page">
        <Navbar />
        <div className="content-page-wrapper">
          <HomeContent />
        </div>
        <MusicPlayer />
      </div>
    </div>
  )
}

export default Home