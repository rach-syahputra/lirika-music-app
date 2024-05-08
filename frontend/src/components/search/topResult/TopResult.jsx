import React from 'react'
import "./topResult.css"
import TopResultArtist from "../topResultArtist/TopResultArtist"
import TopResultSong from "../topResultSong/TopResultSong"
import TopResultAlbum from "../topResultAlbum/TopResultAlbum"

const TopResult = ({ topResult }) => {
  return (
    <div className='top-result'>
      <div className="header">
        <h2>Top Result</h2>
      </div>

      <div className="top-result-content">
        {
          topResult.type === 'artist' ? <TopResultArtist topResult={topResult} /> :
            topResult.type === 'song' ? <TopResultSong topResult={topResult} /> :
              topResult.type === 'album' ? <TopResultAlbum topResult={topResult} /> :
                ''
        }
      </div>
    </div>
  )
}

export default TopResult