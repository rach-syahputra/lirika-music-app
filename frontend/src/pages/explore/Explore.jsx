import React, { useEffect } from 'react'
import "./explore.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import SearchPage from '../../components/exploreContent/ExploreContent'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'

const Explore = () => {

  return (
    <div className="layout">
      <Sidebar currentPage='explore' />
      <div className="explore">
        <Navbar />
        <div className="exploreChild">
          <SearchPage />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default Explore