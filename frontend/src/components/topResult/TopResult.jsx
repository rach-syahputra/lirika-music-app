import React from 'react'
import "./topResult.css"
import TopResultArtist from "../topResultArtist/TopResultArtist"
import TopResultSong from "../topResultSong/TopResultSong"
import TopResultAlbum from "../topResultAlbum/TopResultAlbum"

const TopResult = () => {
  return (
    <div className='topResult'>
      <div className="header">
        <h2>Top Result</h2>
      </div>

      <div className="topResultContent">
        <TopResultArtist />
        <TopResultSong />
        <TopResultAlbum />
      </div>
    </div>
  )
}

export default TopResult