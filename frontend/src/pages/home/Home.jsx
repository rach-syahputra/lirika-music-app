import React, { useEffect } from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import HomeContent from '../../components/homeContent/HomeContent'
import Rightbar from '../../components/rightbar/Rightbar'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="layout">
      <Sidebar currentPage='home' />
      <div className="home-page">
        <Navbar />
        <div className="home-page-child">
          <HomeContent />
          <Rightbar />
        </div>
      </div>
    </div>
  )
}

export default Home