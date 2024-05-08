import React from 'react'
import "./homeContent.css"
import TopSong from '../topSong/TopSong'
import TopArtist from '../topArtist/TopArtist'
import TopAlbum from '../topAlbum/TopAlbum'

const HomeContent = () => {
  return (
    <div className='home-content'>
      <TopArtist />
      <TopAlbum />
      <TopSong />
    </div>
  )
}

export default HomeContent