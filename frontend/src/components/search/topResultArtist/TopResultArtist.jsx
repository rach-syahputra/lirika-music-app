import React from 'react'
import "./topResultArtist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { handlePlay } from '../../../handlers/handleSong'
import { useDispatch } from 'react-redux'
import { fetchArtistSongs } from '../../../redux/reducers/songListSlice'
import { setCurrentSongId } from '../../../redux/reducers/currentSongSlice'
import { setIsPlayedId } from '../../../redux/reducers/isPlayedSlice'

const TopResultArtist = ({ topResult }) => {
  const dispatch = useDispatch()

  const handlePlayButton = (artistId) => {
    dispatch(fetchArtistSongs({ artistId }))
  }

  return (
    <div className="artist">
      <div className="item">
        <div className="artistImg">
          <img src={topResult.artist_image} alt="" />
        </div>
        <div className="info">
          <div className="artistName">
            <h2>{topResult.artist_name}</h2>
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
              className="playButton"
              onClick={() => (handlePlayButton(topResult.artistId, topResult.songId))}
            >
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

export default TopResultArtist