import React, { useEffect } from 'react'
import "./artistPage.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'
import ArtistContent from '../../components/artist/artistContent/ArtistContent'

const ArtistPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="layout">
      <Sidebar />
      <div className="artist-page">
        <Navbar />
        <div className="artist-page-child">
          <ArtistContent />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default ArtistPage