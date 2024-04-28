import React from 'react'
import "./main.css"
import TopSong from '../topSong/TopSong'
import TopArtist from '../topArtist/TopArtist'
import TopAlbum from '../topAlbum/TopAlbum'

const Main = ({ setSongId, handlePlay, handleStop }) => {
  return (
    <div className='main'>
      <TopArtist />
      <TopAlbum />
      <TopSong
        setSongId={setSongId}
        handlePlay={handlePlay}
        handleStop={handleStop}
      />
    </div>
  )
}

export default Main