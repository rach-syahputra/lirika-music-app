import React from 'react'
import "./main.css"
import Search from '../search/Search'
import Trending from '../trending/Trending'
import TopSong from '../topSong/TopSong'

const Main = () => {
  return (
    <div className='main'>
      <Search />
      <Trending />
      <TopSong />
    </div>
  )
}

export default Main