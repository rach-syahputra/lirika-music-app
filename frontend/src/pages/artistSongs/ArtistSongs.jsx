import React, { useEffect } from 'react'
import "./artistSongs.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'
import AllSongsFromArtist from '../../components/allSongsFromArtist/AllSongsFromArtist'

const ArtistSongs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="layout">
      <Sidebar />
      <div className="artist-songs">
        <Navbar />
        <div className="content-page-wrapper">
          <AllSongsFromArtist />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default ArtistSongs