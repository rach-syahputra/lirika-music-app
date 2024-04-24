import React from 'react'
import "./artistSearch.css"
import { truncateText } from '../../utils/truncation'

const ArtistSearch = ({ artists }) => {
  return (
    <div className="artistSearch">
      <div className="header">
        <h2>Artist</h2>
      </div>

      <div className="artistList">
        {artists && artists.map(artist => (
          <div className="item" key={artist.artistId}>
            <div className="artistImg">
              <img src={artist.image} alt="" />
            </div>
            <div className="info">
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