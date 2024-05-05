import React from 'react'
import "./artistImageCover.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'

const ArtistImageCover = () => {
  return (
    <div className="artist-image-cover">
      <div className="img-container">
        <img src="https://heavymusichq.com/wp-content/uploads/2021/07/Mayhem.jpg" alt="" />
        <div className="overlay"></div>
      </div>
      <div className="artist-details">
        <h1 className='artist-name'>Artist Name</h1>
        <h3 className='monthly-listener'>35,290 monthly listeners</h3>
      </div>
    </div>
  )
}

export default ArtistImageCover