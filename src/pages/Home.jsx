import React, { createContext, useState } from 'react'
import "./home.css"
import Sidebar from '../components/sidebar/Sidebar'
import Main from '../components/main/Main'
import Rightbar from '../components/rightbar/Rightbar'
import Navbar from '../components/navbar/Navbar'

export const ContextId = createContext()
export const ContextIsPlayed = createContext()

const Home = () => {
  const [id, setId] = useState("")
  const [isPlayed, setIsPlayed] = useState(false)

  return (
    <div className="container">
      <Sidebar />
      <div className="mainPage">
        <Navbar />
        <ContextId.Provider value={[id, setId]}>
          <ContextIsPlayed.Provider value={[isPlayed, setIsPlayed]}>
            <div className="mainContent">
              <Main />
              <Rightbar />
            </div>
          </ContextIsPlayed.Provider>
        </ContextId.Provider>
      </div>
    </div>
  )
}

export default Home