import React from 'react'
import "./songSearch.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const SongSearch = () => {
  return (
    <div className='songSearch'>
      <div className="header">
        <h2>Songs</h2>
      </div>

      <div className="songList">
        {(() => {
          const items = [];
          for (let i = 0; i < 12; i++) {
            items.push(
              <div className="item" key={i}>
                <div className="songImg">
                  <img src="https://f4.bcbits.com/img/a4105670979_10.jpg" alt="" />
                </div>
                <div className="playButton">
                  <FontAwesomeIcon icon={faPlay} className='icon' />
                </div>
                <div className="info">
                  <h3 className='songTitle' >Aufbruch</h3>
                  <div className="artistAndAlbumInfo">
                    <h4 className='artistName'>Der Weg Einer Freihet</h4>
                    <h4>•</h4>
                    <h4 className='albumName'>Finisterre</h4>
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

export default SongSearch