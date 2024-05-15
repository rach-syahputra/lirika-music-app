import React from 'react'
// import './artistSearch.css'
import { truncateText } from '../../../utils/truncation'

const ArtistSearch = ({ artists }) => {
  return (
    <div className='component-wrapper'>
      <div className='component-header'>
        <span className='header'>Artist</span>
      </div>
      {/* artist list container */}
      <div className='artistList'>
        {artists && artists.map(artist => (
          // artist list
          <div className='item' key={artist.artistId}>
            {/* artist image */}
            <div className='artistImg'>
              <img src={artist.image} alt='' />
            </div>
            {/* details */}
            <div className='info'>
              <h3 className='artistName' >
                {truncateText(artist.artistName, 16)}
              </h3>
              <h4 className='type'>Artist</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ArtistSearch