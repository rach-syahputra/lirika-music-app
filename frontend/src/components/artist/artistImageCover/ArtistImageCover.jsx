import React, { useEffect, useState } from 'react'
import "./artistImageCover.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ArtistImageCover = () => {
  const { artistId } = useParams()
  const [artist, setArtist] = useState([])

  useEffect(() => {
    getArtistImageCoverData()
  }, [])

  const getArtistImageCoverData = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/artist/${artistId}/artistImageCover`)

      const data = res.data[0]
      console.log(data.artistName)
      setArtist(data)
    } catch (error) {
      console.log('ArtistImageCover Error', error.message)
    }
  }

  return (

    <div className="artist-image-cover-container">
      {artist && (
        <div className="artist-image-cover">
          <div className="img-container">
            <img src={artist.image} alt="" />
            <div className="overlay"></div>
          </div>
          <div className="artist-details">
            <h1 className='artist-name'>{artist.artistName}</h1>
            <h3 className='monthly-listener'>35,290 monthly listeners</h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArtistImageCover