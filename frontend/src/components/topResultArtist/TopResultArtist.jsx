import React, { useContext, useEffect, useState } from 'react'
import "./topResultArtist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { SongPlaybackContext } from '../../hooks/songPlaybackContext'
import { handlePlay } from '../../handlers/handleSong'
import axios from 'axios'

const TopResultArtist = ({ topResult }) => {
  const { isPlayedId, playSong, currentSongId, setCurrentSelectedSongId } = useContext(SongPlaybackContext)
  const [songId, setSongId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/song/find/topSongFromArtist/${topResult.artistId}`)

        const song = res.data
        setSongId(song[0].songId)
      } catch (error) {
        console.log('TopResultArtist ', error.message)
      }
    }
    fetchData()
  }, [topResult])

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
            <div className="playButton" onClick={() => handlePlay(songId, setCurrentSelectedSongId, playSong)}>
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