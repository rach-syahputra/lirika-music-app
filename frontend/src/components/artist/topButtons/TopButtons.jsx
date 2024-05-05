import React from 'react'
import "./topButtons.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'

const TopButtons = () => {
  return (
    <div className="top-buttons">
      <div className='play-button'>
        <FontAwesomeIcon icon={faPlay} className='icon' /> Play
      </div>
      <div className='shuffle-button'>
        <FontAwesomeIcon icon={faShuffle} className='icon' /> Shuffle
      </div>
      <div className='follow-button'>
        Follow
      </div>
    </div>
  )
}

export default TopButtons