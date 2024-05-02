import React from 'react'
import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Main from '../../components/main/Main'
import Rightbar from '../../components/rightbar/Rightbar'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className="layout">
      <Sidebar currentPage='home' />
      <div className="mainPage">
        <Navbar />
        <div className="mainContent">
          <Main />
          <Rightbar />
        </div>
      </div>
    </div>
  )
}

export default Home