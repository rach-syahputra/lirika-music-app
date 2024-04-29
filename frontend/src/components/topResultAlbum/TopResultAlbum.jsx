import React, { useContext, useEffect, useState } from 'react'
import "./topResultAlbum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { SongPlaybackContext } from '../../hooks/songPlaybackContext'
import axios from 'axios'
import { handlePlay } from '../../handlers/handleSong'

const TopResultAlbum = ({ topResult }) => {
  const { isPlayedId, playSong, currentSongId, setCurrentSelectedSongId } = useContext(SongPlaybackContext)
  const [songId, setSongId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/song/find/topSongFromAlbum/${topResult.albumId}`)

        const song = res.data
        setSongId(song[0].songId)
      } catch (error) {
        console.log('TopResultAlbum ', error.message)
      }
    }
    fetchData()
  }, [topResult])

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

export default TopResultAlbum