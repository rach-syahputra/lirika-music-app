import React, { useEffect } from 'react'
import "./explore.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'
import ExploreContent from '../../components/exploreContent/ExploreContent'

const Explore = () => {

  return (
    <div className="layout">
      <Sidebar currentPage='explore' />
      <div className="explore">
        <Navbar />
        <div className="exploreChild">
          <ExploreContent />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default Explore