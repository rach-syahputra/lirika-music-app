import React, { useContext, useEffect, useState } from 'react'
import "./topResultAlbum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { handlePlay } from '../../../handlers/handleSong'
import { useDispatch } from 'react-redux'
import { fetchAlbumSongs } from '../../../redux/reducers/songListSlice'
import { setCurrentSongId } from '../../../redux/reducers/currentSongSlice'
import { setIsPlayedId } from '../../../redux/reducers/isPlayedSlice'
import { useNavigate } from 'react-router-dom'

const TopResultAlbum = ({ topResult }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlayButton = async (albumId) => {
    await dispatch(fetchAlbumSongs({ albumId })).unwrap()
    navigate(`/album/${topResult.albumId}/songs`)
    // handlePlay(songId, dispatch, setCurrentSongId, setIsPlayedId)
  }

  return (
    <div className="album">
      <div className="item">
        <div className="albumImg">
          <img src={topResult.album_image} alt="" />
        </div>
        <div className="info">
          <div className="albumName">
            <h2>{topResult.album_name}</h2>
          </div>
          <div className="details">
            <h4>
              <span className='type'>Album</span>
              •
              <span className='artistName'>{topResult.artist_name}</span>
            </h4>
          </div>
          <div className="buttons">
            <div className="playButton" onClick={() => handlePlayButton(topResult.albumId)}>
              <FontAwesomeIcon icon={faPlay} className='icon' /> Play
            </div>
            <div className="shuffleButton">
              <FontAwesomeIcon icon={faShuffle} className='icon' /> Shuffle
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopResultAlbum