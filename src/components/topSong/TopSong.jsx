import React from 'react'
import "./topSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

const TopSong = () => {
  return (
    <div className='topSong'>
      <div className="header">
        <h3>Top Songs</h3>
        <h5>See All</h5>
      </div>
      <div className="songList">
        <div className="item">
          <div className="info">
            <h5>01</h5>
            <img src="https://www.spirit-of-metal.com/les%20goupes/B/Beyond%20Creation/Algorythm/Algorythm_8172.jpg" alt="" />
            <div className="detail">
              <h3>Song Title</h3>
              <h5>Artist</h5>
            </div>
          </div>
          <div className="action">
            <h3>03:00</h3>
            <div className="playIcon">
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>
            <div className="plusIcon">
              <FontAwesomeIcon icon={faPlus} className='icon' />
            </div>
          </div>
        </div>

        <div className="item">
          <div className="info">
            <h5>01</h5>
            <img src="https://www.spirit-of-metal.com/les%20goupes/B/Beyond%20Creation/Algorythm/Algorythm_8172.jpg" alt="" />
            <div className="detail">
              <h3>Song Title</h3>
              <h5>Artist</h5>
            </div>
          </div>
          <div className="action">
            <h3>03:00</h3>
            <div className="playIcon">
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>
            <div className="plusIcon">
              <FontAwesomeIcon icon={faPlus} className='icon' />
            </div>
          </div>
        </div>

        <div className="item">
          <div className="info">
            <h5>01</h5>
            <img src="https://www.spirit-of-metal.com/les%20goupes/B/Beyond%20Creation/Algorythm/Algorythm_8172.jpg" alt="" />
            <div className="detail">
              <h3>Song Title</h3>
              <h5>Artist</h5>
            </div>
          </div>
          <div className="action">
            <h3>03:00</h3>
            <div className="playIcon">
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>
            <div className="plusIcon">
              <FontAwesomeIcon icon={faPlus} className='icon' />
            </div>
          </div>
        </div>

        <div className="item">
          <div className="info">
            <h5>01</h5>
            <img src="https://www.spirit-of-metal.com/les%20goupes/B/Beyond%20Creation/Algorythm/Algorythm_8172.jpg" alt="" />
            <div className="detail">
              <h3>Song Title</h3>
              <h5>Artist</h5>
            </div>
          </div>
          <div className="action">
            <h3>03:00</h3>
            <div className="playIcon">
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>
            <div className="plusIcon">
              <FontAwesomeIcon icon={faPlus} className='icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSong