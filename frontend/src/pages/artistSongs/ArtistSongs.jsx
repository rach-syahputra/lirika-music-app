import React from 'react'
import "./artistSongs.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'
import AllSongsFromArtist from '../../components/allSongsFromArtist/AllSongsFromArtist'

const ArtistSongs = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="artist-songs">
        <Navbar />
        <div className="artist-songs-child">
          <AllSongsFromArtist />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default ArtistSongs