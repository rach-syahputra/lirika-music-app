import React, { useEffect } from 'react'
import "./albumSongs.css"
import AllSongsFromAlbum from '../../components/allSongsFromAlbum/AllSongsFromAlbum'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'

const AlbumSongs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className="layout">
      <Sidebar />
      <div className="album-songs">
        <Navbar />
        <div className='content-page-wrapper'>
          <AllSongsFromAlbum />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default AlbumSongs