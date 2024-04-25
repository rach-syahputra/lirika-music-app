import React from 'react'
import "./topResultSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

const TopResultSong = ({ topResult }) => {
  return (
    <div className="song">
      <div className="item">
        <div className="albumImg">
          <img src={topResult.album_image} alt="" />
        </div>
        <div className="info">
          <div className="songTitle">
            <h2>{topResult.song_title}</h2>
          </div>
          <div className="details">
            <h4>
              <span className='type'>Song</span>
              •
              <span className='artistName'>{topResult.artist_name}</span>
              •
              <span className='album'>{topResult.album_name}</span>
              •
              <span className='duration'>{topResult.duration}</span>
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