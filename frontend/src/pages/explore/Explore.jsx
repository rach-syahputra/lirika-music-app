import React, { useEffect } from 'react'
import "./explore.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'
import ExploreContent from '../../components/exploreContent/ExploreContent'

const Explore = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="layout">
      <Sidebar currentPage='explore' />
      <div className="explore-page">
        <Navbar />
        <div className="content-page-wrapper">
          <ExploreContent />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default Explore