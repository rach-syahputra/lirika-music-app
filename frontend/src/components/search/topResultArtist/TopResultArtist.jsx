import React from 'react'
import "./topResultArtist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchArtistSongs } from '../../../redux/reducers/songListSlice'
import { Link, useNavigate } from 'react-router-dom'

const TopResultArtist = ({ topResult }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlayButton = async (artistId) => {
    await dispatch(fetchArtistSongs({ artistId })).unwrap()
    navigate(`/artist/${topResult.artistId}`)
  }

  return (
    <div className="top-result-artist">
      <div className="item">
        <div className="artist-img">
          <Link to={`/artist/${topResult.artistId}`}>
            <img src={topResult.artist_image} alt="" />
          </Link>
        </div>
        <div className="info">
          <div className="artist-name">
            <Link to={`/artist/${topResult.artistId}`}>
              <h2>{topResult.artist_name}</h2>
            </Link>
          </div>
          <div className="details">
            <h4>
              <span className='type'>Artist</span>
              •
              <span className='follower'>100K Follower</span>
            </h4>
          </div>
          <div className="buttons">
            <div
              className="play-button"
              onClick={() => (handlePlayButton(topResult.artistId, topResult.songId))}
            >
              <FontAwesomeIcon icon={faPlay} className='icon' /> Play
            </div>
            <div className="shuffle-button">
              <FontAwesomeIcon icon={faShuffle} className='icon' /> Shuffle
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopResultArtist