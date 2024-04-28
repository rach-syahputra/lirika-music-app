import React from 'react'
import "./musicPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faForwardStep, faHandDots, faPause, faPlay, faPlus, faRepeat, faShuffle, faVolumeLow } from '@fortawesome/free-solid-svg-icons'
// import { handleToggleLike, isLiked } from '../../handlers/handleSong'

const MusicPlayer = () => {
  return (
    <div className='musicPlayer'>
      <div className="leftControl">
        <div className="imgContainer">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Planetary_Duality.jpg" alt="" />
        </div>
        <div className='songDetails'>
          <h2 className='songTitle'>Song Title</h2>
          <h4 className='moreSongDetails'>Artist Name • Album • 2008</h4>
        </div>
        <div className="buttonPlus">
          <FontAwesomeIcon icon={faPlus} className='icon' />
        </div>
      </div>

      <div className="middleControl">
        <div className="controlButtons">
          <FontAwesomeIcon icon={faBackwardStep} className='icon' />
          <FontAwesomeIcon icon={faPlay} className='playIcon' />
          {/* <FontAwesomeIcon icon={faPause} /> */}
          <FontAwesomeIcon icon={faForwardStep} className='icon' />
        </div>
        <div className="durations">
          <h5>0.10 / 4.02</h5>
        </div>
      </div>

      <div className="rightControl">
        <div className="controlButtons">
          <FontAwesomeIcon icon={faVolumeLow} className='icon' />
          <FontAwesomeIcon icon={faRepeat} className='icon' />
          <FontAwesomeIcon icon={faShuffle} className='icon' />
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer