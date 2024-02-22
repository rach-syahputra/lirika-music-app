import React from 'react'
import "./main.css"
import Search from '../search/Search'
import Trending from '../trending/Trending'
import TopSong from '../topSong/TopSong'

const Main = ({ songs, handlePlay, handleStop }) => {
  return (
    <div className='main'>
      <Trending />
      <TopSong
        songs={songs}
        handlePlay={handlePlay}
        handleStop={handleStop}
      />
    </div>
  )
}

export default Main