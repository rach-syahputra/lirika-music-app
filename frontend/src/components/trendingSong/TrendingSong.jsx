import React from 'react'
import "./trendingSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const TrendingSong = () => {
  return (
    <div className='trendingSong'>
      <div className="header">
        <h2>Trending Songs</h2>
      </div>

      <div className="songList">
        {(() => {
          const items = [];
          for (let i = 0; i < 12; i++) {
            items.push(
              <div className="item" key={i}>
                <div className="songImg">
                  <img src="https://f4.bcbits.com/img/a2293656915_10.jpg" alt="" />
                </div>
                <div className="playButton">
                  <FontAwesomeIcon icon={faPlay} className='icon' />
                </div>
                <div className="info">
                  <h3 className='songTitle' >When A Great Man Dies</h3>
                  <div className="artistAndAlbumInfo">
                    <h4 className='artistName'>Pure Wrath</h4>
                    <h4>•</h4>
                    <h4 className='albumName'>Hymne To The</h4>
                  </div>
                </div>
              </div>
            );
          }
          return items;
        })()}
      </div>
    </div>
  )
}

export default TrendingSong