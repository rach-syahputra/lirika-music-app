import React from 'react'
import "./artist.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'
import ArtistContent from '../../components/artist/artistContent/ArtistContent'

const Artist = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="artist">
        <Navbar />
        <div className="artist-child">
          <ArtistContent />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default Artist