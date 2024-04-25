import React from 'react'
import "./topResultSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

const TopResultSong = () => {
  return (
    <div className="song">
      <div className="item">
        <div className="albumImg">
          <img src="https://t2.genius.com/unsafe/425x425/https%3A%2F%2Fimages.genius.com%2F0bb09b15e5c74268dd489f480aef0949.1000x1000x1.png" alt="" />
        </div>
        <div className="info">
          <div className="songTitle">
            <h2>Garden Skeleton</h2>
          </div>
          <div className="details">
            <h4>
              <span className='type'>Song</span>
              •
              <span className='artistName'>Fleshgod Apocalypse</span>
              •
              <span className='album'>Heretic</span>
              •
              <span className='duration'>4.00</span>
            </h4>
          </div>
          <div className="buttons">
            <div className="playButton">
              <FontAwesomeIcon icon={faPlay} className='icon' /> Play
            </div>
            <div className="addButton">
              <FontAwesomeIcon icon={faPlus} className='icon' /> Add
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopResultSong