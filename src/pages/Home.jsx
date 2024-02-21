import React, { createContext, useState } from 'react'
import "./home.css"
import Sidebar from '../components/sidebar/Sidebar'
import Main from '../components/main/Main'
import Rightbar from '../components/rightbar/Rightbar'
import Navbar from '../components/navbar/Navbar'

export const Context = createContext()

const Home = () => {
  const [id, setId] = useState("")

  return (
    <div className="container">
      <Sidebar />
      <div className="mainPage">
        <Navbar />
        <Context.Provider value={[id, setId]}>
          <div className="mainContent">
            <Main />
            <Rightbar />
          </div>
        </Context.Provider>
      </div>
    </div>
  )
}

export default Home