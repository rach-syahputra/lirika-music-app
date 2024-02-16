import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import MusicPlayer from './components/musicPlayer/MusicPlayer'
import Main from './components/main/Main'
import Sidebar from './components/sidebar/Sidebar'


function App() {


  return (
    <div className="container">
      <Sidebar />
      <Main />
      <MusicPlayer />
    </div>
  )
}

export default App
