import React from 'react'
import "./musicPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faBackward, faBars, faForward, faPlay } from '@fortawesome/free-solid-svg-icons'


const MusicPlayer = () => {
  return (
    <div className='musicPlayer'>
      <div className="top">
        <div className="header">
          <h3>Player</h3>
          <FontAwesomeIcon icon={faBars} className='icon' />
        </div>
        <div className="songContainer">
          <div className="imgContainer">
            <img src="https://cdn-p.smehost.net/sites/7f9737f2506941499994d771a29ad47a/wp-content/uploads/2022/03/SOP-Incurso-cover-art.jpg" alt="" />
          </div>
          <div className="songInfo">
            <h2>Apparation</h2>
            <h3>Spawn of Possession</h3>
            <h4>Best of 2024</h4>
          </div>
          <div className="progress">
            <h4>3.45</h4>
            <div className="playedLine"></div>
            <div className="unplayedLine"></div>
            <h4>5.01</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <FontAwesomeIcon icon={faBackward} className='icon' />
          <div className="playIcon">
            <FontAwesomeIcon icon={faPlay} className='icon' />
          </div>
          <FontAwesomeIcon icon={faForward} className='icon' />
        </div>
        <div className="lyric">
          <FontAwesomeIcon icon={faAngleUp} className='icon' />
          <h4>LYRICS</h4>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer