import React from 'react'
import "./artistAbout.css"

const ArtistAbout = () => {
  return (
    <div className="artist-about">
      <div className="header">
        <h2>About</h2>
      </div>
      <div className="artist-image-container">
        <img src="https://heavymusichq.com/wp-content/uploads/2021/07/Mayhem.jpg" alt="" />
        <div className="overlay"></div>
        <div className="artist-description">
          <p>Mayhem is a Norwegian black metal band formed in Langhus in 1984. They were one of the founders of the Norwegian black metal scene and their music has strongly influenced the black metal genre. The group released a demo and an EP that were highly influential, and ...</p>
        </div>
      </div>

    </div>
  )
}

export default ArtistAbout