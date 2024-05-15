import React from 'react'
// import './topResult.css'
import TopResultArtist from '../topResultArtist/TopResultArtist'
import TopResultSong from '../topResultSong/TopResultSong'
import TopResultAlbum from '../topResultAlbum/TopResultAlbum'

const TopResult = ({ topResult }) => {
  return (
    <div className='component-wrapper'>
      <div className='component-header'>
        <span className='header'>Top Result</span>
      </div>

      <div className='w-full'>
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