import React, { useEffect, useState } from 'react'
import "./topSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

const TopSong = () => {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSongs(data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className='topSong'>
      <div className="header">
        <h3>Top Songs</h3>
        <h5>See All</h5>
      </div>

      <div className="songList">
        {songs && songs.slice(0, 4).map((song, index) => (
          <div className="item" key={song.id}>
            <div className="info">
              <h5>{index + 1}</h5>
              <img src={song.image} alt="" />
              <div className="detail">
                <h3 className='title'>{song.title}</h3>
                <h5 className='artist'>{song.artist}</h5>
              </div>
            </div>
            <div className="action">
              <h3>{song.duration}</h3>
              <div className="playIcon">
                <FontAwesomeIcon icon={faPlay} className='icon' />
              </div>
              <div className="plusIcon">
                <FontAwesomeIcon icon={faPlus} className='icon' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSong