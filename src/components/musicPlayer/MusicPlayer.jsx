import React, { useContext, useEffect, useState } from 'react'
import "./musicPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faBackward, faBars, faForward, faPlay } from '@fortawesome/free-solid-svg-icons'
import { Context } from "../../pages/Home"


const MusicPlayer = () => {
  const [id, setId] = useContext(Context)
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [image, setImage] = useState("")
  const isLarge = title && title.length > 20 ? true : false

  useEffect(() => {
    fetch("http://localhost:3000/songs/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTitle(data.title)
        setArtist(data.artist)
        setImage(data.image)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [id])

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
              <h2 style={{ fontSize: isLarge && '18px' }}>{id ? title : 'Song Title'}</h2>
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
        <div className="icons">
          <FontAwesomeIcon icon={faBackward} className='icon' />
          <div className="playIcon">
            <FontAwesomeIcon icon={faPlay} className='icon' />
          </div>
          <FontAwesomeIcon icon={faForward} className='icon' />
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