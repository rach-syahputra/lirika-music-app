import React from 'react'
import "./main.css"
import TopSong from '../topSong/TopSong'
import TopArtist from '../topArtist/TopArtist'

const Main = ({ songs, songId, setSongId, handlePlay, handleStop }) => {
  return (
    <div className='main'>
      <TopArtist />
      <TopSong
        songs={songs}
        songId={songId}
        setSongId={setSongId}
        handlePlay={handlePlay}
        handleStop={handleStop}
      />
    </div>
  )
}

export default Main