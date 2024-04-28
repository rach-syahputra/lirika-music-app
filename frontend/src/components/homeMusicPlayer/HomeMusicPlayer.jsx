import React, { useContext, useEffect, useState } from 'react'
import "./homeMusicPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faBackward, faBars, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { SongPlaybackContext } from '../../hooks/songPlaybackContext'

const HomeMusicPlayer = ({ songs, handleNext, handlePrev, handlePlay, handleStop }) => {
  const { isPlayedId, playSong, currentSongId, setCurrentSelectedSongId } = useContext(SongPlaybackContext)
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [image, setImage] = useState("")
  const isLarge = title && title.length > 20 ? true : false

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
    <div className='homeMusicPlayer'>
      <div className="top">
        <div className="header">
          <h3>Player</h3>
          <FontAwesomeIcon icon={faBars} className='icon' />
        </div>
        <div className="songContainer">
          <div className="imgContainer">
            <img src={image ? `${image}` : 'https://f4.bcbits.com/img/a4139357031_10.jpg'} alt="" />
          </div>
          <div className="songInfo">
            <div className="songTitle">
              <h2 style={{ fontSize: isLarge && '18px' }}>{currentSongId ? title : 'Song Title'}</h2>
            </div>
            <h3>{artist}</h3>
            <h4>Best of 2024</h4>
          </div>
          <div className="progress">
            <h4>3.45</h4>
            <div className="playedLine"></div>
            <div className="unplayedLine"></div>
            <h4>5.01</h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="buttons">
          <div className="buttonPrev" onClick={() => handlePrev(songs, currentSongId, setCurrentSelectedSongId, playSong)}>
            <FontAwesomeIcon icon={faBackward} className='icon' />
          </div>
          {isPlayedId
            ?
            <div className="buttonStop" onClick={() => handleStop(playSong)}>
              <FontAwesomeIcon icon={faPause} className='icon' />
            </div>
            :
            <div className="buttonPlay" onClick={() => handlePlay(currentSongId, setCurrentSelectedSongId, playSong)}>
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>

          }
          <div className="buttonNext" onClick={() => handleNext(songs, currentSongId, setCurrentSelectedSongId, playSong)}>
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