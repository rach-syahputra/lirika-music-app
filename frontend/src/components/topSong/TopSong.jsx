import React, { useContext, useEffect, useState } from 'react'
import "./topSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPause, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { SongPlaybackContext } from '../../hooks/songPlaybackContext'
import { handleToggleLike, isLiked } from '../../handlers/handleSong'

const TopSong = ({ handlePlay, handleStop }) => {
  const { isPlayedId, playSong, setCurrentSelectedSongId } = useContext(SongPlaybackContext)
  const [likedIds, setLikedIds] = useState([])
  const [topSongs, setTopSongs] = useState()

  useEffect(() => {
    const getTopSongs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/song/topSongs")

        setTopSongs(res.data)
      } catch (err) {
        console.log('TopSongs Error: ', err.message)
      }
    }
    getTopSongs()
  }, [])

  return (
    <div className='topSong'>
      <div className="header">
        <h2>Top Songs</h2>
        <h4>See All</h4>
      </div>

      <div className="songList">
        {topSongs && topSongs.map((song, index) => (
          <div className="item" key={song.songId}>
            <div className="info">
              <h4 className='number'>{index + 1}</h4>
              <img src={song.image} alt="" />
              <div className="detail">
                <h3 className='title'>{song.title}</h3>
                <h4 className='artist'>{song.artist}</h4>
              </div>
            </div>
            <div className="action">
              <h3>{song.duration}</h3>

              {isPlayedId === song.songId
                ?
                <div className="buttonStop" onClick={() => handleStop(playSong)}>
                  <FontAwesomeIcon icon={faPause} className='icon' />
                </div>
                :
                <div className="buttonPlay" onClick={() => handlePlay(song.songId, setCurrentSelectedSongId, playSong)}>
                  <FontAwesomeIcon icon={faPlay} className='icon' />
                </div>
              }

              {isLiked(likedIds, song.songId)
                ?
                <div className="buttonCheck" onClick={() => handleToggleLike(likedIds, setLikedIds, song.songId)}>
                  <FontAwesomeIcon icon={faCheck} className='icon' />
                </div>
                :
                <div className="buttonPlus" onClick={() => handleToggleLike(likedIds, setLikedIds, song.songId)}>
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

