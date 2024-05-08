import React, { useContext, useEffect, useState } from 'react'
import "./homeMusicPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faBackward, faBars, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { handleNext, handlePrev, handlePlay, handleStop } from "../../handlers/handleSong.js"
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSongId } from '../../redux/reducers/currentSongSlice.js'
import { setIsPlayedId } from '../../redux/reducers/isPlayedSlice.js'

const HomeMusicPlayer = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [image, setImage] = useState("")
  const isLarge = title && title.length > 20 ? true : false
  const currentSongId = useSelector(state => state.currentSongId.id)
  const isPlayedId = useSelector(state => state.isPlayedId.id)
  const songs = useSelector(state => state.songList.data)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/song/find/" + currentSongId)
        const song = res.data

        setTitle(song.title)
        setArtist(song.artist)
        setImage(song.image)
      } catch (error) {
        console.log('HomeMusicPlayer Error: ', error)
      }
    }
    fetchData();
  }, [currentSongId])

  return (
    <div className='home-music-player'>
      <div className="top">
        <div className="header">
          <h3>Player</h3>
          <FontAwesomeIcon icon={faBars} className='icon' />
        </div>
        <div className="songs-container">
          <div className="img-container">
            <img src={image ? `${image}` : 'https://f4.bcbits.com/img/a4139357031_10.jpg'} alt="" />
          </div>
          <div className="song-info">
            <div className="song-title">
              <h2 style={{ fontSize: isLarge && '18px' }}>{currentSongId ? title : 'Song Title'}</h2>
            </div>
            <h3>{artist}</h3>
            <h4>Best of 2024</h4>
          </div>
          <div className="progress">
            <h4>3.45</h4>
            <div className="played-line"></div>
            <div className="unplayed-line"></div>
            <h4>5.01</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="buttons">
          <div className="prev-button" onClick={() => handlePrev(songs, currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
            <FontAwesomeIcon icon={faBackward} className='icon' />
          </div>
          {isPlayedId
            ?
            <div className="stop-button" onClick={() => handleStop(setIsPlayedId, dispatch)}>
              <FontAwesomeIcon icon={faPause} className='icon' />
            </div>
            :
            <div className="play-button" onClick={() => handlePlay(currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>

          }
          <div className="next-button" onClick={() => handleNext(songs, currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
            <FontAwesomeIcon icon={faForward} className='icon' />
          </div>
        </div>
        <div className="lyric">
          <FontAwesomeIcon icon={faAngleUp} className='icon' />
          <h4>LYRICS</h4>
        </div>
      </div>
    </div>
  )
}

export default HomeMusicPlayer