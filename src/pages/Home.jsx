import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import Main from '../components/main/Main'
import Rightbar from '../components/rightbar/Rightbar'

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <Main />
      <Rightbar />
    </div>
  )
}

export default Home