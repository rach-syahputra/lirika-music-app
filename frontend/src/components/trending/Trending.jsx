import React from 'react'
import "./trending.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const Trending = () => {
  return (
    <div className='trending'>
      <h3>Trending New Song</h3>
      <div className="trendingSong">
        <div className="info">
          <h1>Djevelen I Nord</h1>
          <div className="artistInfo">
            <h3>Nordjevel</h3>
            <h4>20 Million Plays</h4>
          </div>
          <div className="button">
            <button className="listen">
              Listen Now
            </button>
            <button className="like">
              <FontAwesomeIcon icon={faHeart} className='icon' />
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </button>
          </div>
        </div>
        <img src="https://www.angrymetalguy.com/wp-content/uploads/2022/09/Nordjevel-Gnavhol-01-500x500.jpg.webp" alt="" />
      </div>
    </div>
  )
}

export default Trending