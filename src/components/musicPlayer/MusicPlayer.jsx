import React, { useContext, useEffect, useState } from 'react'
import "./musicPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faBackward, faBars, faForward, faPause, faPlay, faSquare } from '@fortawesome/free-solid-svg-icons'
import { ContextIsPlayedId } from '../../pages/home/Home'


const MusicPlayer = ({ songs, songId, setSongId, handleNext, handlePrev, handlePlay, handleStop }) => {
  const [isPlayedId, setIsPlayedId] = useContext(ContextIsPlayedId)
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [image, setImage] = useState("")
  const isLarge = title && title.length > 20 ? true : false

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/songs/" + songId);
        const data = await response.json()

        setTitle(data.title)
        setArtist(data.artist)
        setImage(data.image)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchData();
  }, [songId])

  return (
    <div className='musicPlayer'>
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
              <h2 style={{ fontSize: isLarge && '18px' }}>{songId ? title : 'Song Title'}</h2>
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
          <div className="buttonPrev" onClick={() => handlePrev(songs, songId, setSongId, setIsPlayedId)}>
            <FontAwesomeIcon icon={faBackward} className='icon' />
          </div>
          {isPlayedId === songId
            ?
            <div className="buttonStop" onClick={() => handleStop(setIsPlayedId)}>
              <FontAwesomeIcon icon={faPause} className='icon' />
            </div>
            :
            <div className="buttonPlay" onClick={() => handlePlay(setIsPlayedId, setSongId, songId)}>
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>

          }
          <div className="buttonNext" onClick={() => handleNext(songs, songId, setSongId, setIsPlayedId)}>
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

export default MusicPlayer