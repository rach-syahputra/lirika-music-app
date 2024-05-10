import React, { useEffect, useState } from 'react'
import "./topArtist.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchArtistSongs } from '../../redux/reducers/songListSlice'

const TopArtist = () => {
  const [topArtists, setTopArtists] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    getTopArtists()
  }, [])

  const getTopArtists = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/artist/topArtist")

      setTopArtists(res.data)
    } catch (err) {
      console.log('TopArtist: ', err.message)
    }
  }

  const handlePlayButton = async (artistId) => {
    try {
      await dispatch(fetchArtistSongs({ artistId })).unwrap()
      navigate(`/artist/${artistId}`)
    } catch (error) {

    }

  }

  return (
    <div className='top-artist'>
      <div className="header">
        <h2>Top Artists</h2>
      </div>

      <div className="artist-list">
        {topArtists && topArtists.map(artist => (
          <div
            className="item"
            key={artist.artistId}
          >
            <div
              className="artist-img"
              onClick={() => navigate(`/artist/${artist.artistId}`)}
            >
              <img src={artist.image} alt="" />
              <div
                className="play-button"
                onClick={() => (handlePlayButton(artist.artistId))}
              >
                <FontAwesomeIcon icon={faPlay} className='icon' />
              </div>
            </div>
            <div className="info">
              <h3 className='artist-name' >
                {artist.artistName.length > 15
                  ? artist.artistName.slice(0, 13) + '...'
                  : artist.artistName}
              </h3>
              <h4 className='country'>{artist.country}</h4>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default TopArtist