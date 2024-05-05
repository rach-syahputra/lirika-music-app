import React from 'react'
import "./artistSongs.css"
import AllSongs from '../../components/allSongs/AllSongs'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'

const ArtistSongs = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="artist-songs">
        <Navbar />
        <div className="artist-songs-child">
          <AllSongs />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default ArtistSongs