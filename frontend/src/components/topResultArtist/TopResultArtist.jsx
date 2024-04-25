import React from 'react'
import "./topResultArtist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'

const TopResultArtist = () => {
  return (
    <div className="artist">
      <div className="item">
        <div className="artistImg">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJQxru0fsxHrFeCb_3Di0ClIXLA1QBm36ispyI_NEvA&s" alt="" />
        </div>
        <div className="info">
          <div className="artistName">
            <h2>Fleshgod Apocalypse</h2>
          </div>
          <div className="details">
            <h4>
              <span className='type'>Album </span>
              •
              <span className='follower'> 100K Follower</span>
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

export default TopResultArtist