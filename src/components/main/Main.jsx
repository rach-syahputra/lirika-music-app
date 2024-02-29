import React from 'react'
import "./main.css"
import Trending from '../trending/Trending'
import TopSong from '../topSong/TopSong'

const Main = ({ songs, songId, setSongId, handlePlay, handleStop }) => {
  return (
    <div className='main'>
      <Trending />
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