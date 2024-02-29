import React, { useContext, useEffect, useState } from 'react'
import "./topSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPause, faPlay, faPlus, faSquare } from '@fortawesome/free-solid-svg-icons'
import { ContextIsPlayedId } from '../../pages/home/Home'

const TopSong = ({ songs, songId, setSongId, handlePlay, handleStop }) => {
  const [isPlayedId, setIsPlayedId] = useContext(ContextIsPlayedId)
  const [likedId, setLikedId] = useState([])

  useEffect(() => {

  }, [])

  const handleToggleLike = (songId) => {
    if (likedId.includes(songId)) {
      setLikedId(likedId.filter((id) => id !== songId))
    } else {
      setLikedId([...likedId, songId])
    }
  }

  const isLiked = (songId) => likedId.includes(songId);

  return (
    <div className='topSong'>
      <div className="header">
        <h3>Top Songs</h3>
        <h5>See All</h5>
      </div>

      <div className="songList">
        {songs && songs.sort((a, b) => b.playedCount - a.playedCount).slice(0, 4).map((song, index) => (
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

              {isPlayedId === song.id
                ?
                <div className="buttonStop" onClick={() => handleStop(setIsPlayedId)}>
                  <FontAwesomeIcon icon={faPause} className='icon' />
                </div>
                :
                <div className="buttonPlay" onClick={() => handlePlay(setIsPlayedId, setSongId, song.id)}>
                  <FontAwesomeIcon icon={faPlay} className='icon' />
                </div>
              }

              {isLiked(song.id)
                ?
                <div className="buttonCheck" onClick={() => handleToggleLike(song.id)}>
                  <FontAwesomeIcon icon={faCheck} className='icon' />
                </div>
                :
                <div className="buttonPlus" onClick={() => handleToggleLike(song.id)}>
                  <FontAwesomeIcon icon={faPlus} className='icon' />
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSong

