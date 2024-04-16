import React, { useEffect } from 'react'
import "./explore.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import SearchPage from '../../components/exploreContent/ExploreContent'

const Explore = () => {

  return (
    <div className="container">
      <Sidebar currentPage='explore' />
      <div className="explore">
        <Navbar />
        <div className="exploreChild">
          <SearchPage />
        </div>
      </div>
    </div>
  )
}

export default Explore