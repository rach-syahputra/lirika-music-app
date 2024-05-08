import React from 'react'
import "./topResultSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchArtistSongs } from '../../../redux/reducers/songListSlice'
import { useNavigate } from 'react-router-dom'

const TopResultSong = ({ topResult }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlayButton = async (artistId, songId) => {
    await dispatch(fetchArtistSongs({ artistId, songId })).unwrap()
    navigate(`/artist/${artistId}/songs`)
  }

  return (
    <div className="top-result-song">
      <div className="item">
        <div className="album-img">
          <img src={topResult.album_image} alt="" />
        </div>
        <div className="info">
          <div className="song-title">
            <h2>{topResult.song_title}</h2>
          </div>
          <div className="details">
            <h4>
              <span className='type'>Song</span>
              •
              <span className='artist-name'>{topResult.artist_name}</span>
              •
              <span className='album'>{topResult.album_name}</span>
              •
              <span className='duration'>{topResult.duration}</span>
            </h4>
          </div>
          <div className="buttons">
            <div className="play-button" onClick={() => handlePlayButton(topResult.artistId, topResult.songId)}>
              <FontAwesomeIcon icon={faPlay} className='icon' /> Play
            </div>
            <div className="add-button">
              <FontAwesomeIcon icon={faPlus} className='icon' /> Add
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopResultSong