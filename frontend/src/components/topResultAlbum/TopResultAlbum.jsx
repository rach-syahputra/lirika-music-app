import React from 'react'
import "./topResultAlbum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'

const TopResultAlbum = () => {
  return (
    <div className="album">
      <div className="item">
        <div className="albumImg">
          <img src="https://f4.bcbits.com/img/a2293656915_10.jpg" alt="" />
        </div>
        <div className="info">
          <div className="albumName">
            <h2>Hymne To The Woeful Heart</h2>
          </div>
          <div className="details">
            <h4>
              <span className='type'>Album</span>
              •
              <span className='artistName'>Pure Wrath</span>
            </h4>
          </div>
          <div className="buttons">
            <div className="playButton">
              <FontAwesomeIcon icon={faPlay} className='icon' /> Play
            </div>
            <div className="shuffleButton">
              <FontAwesomeIcon icon={faShuffle} className='icon' /> Shuffle
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopResultAlbum