import React, { useContext, useEffect, useState } from 'react'
import "./topSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPause, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { handleToggleLike, isLiked, handlePlay, handleStop } from '../../handlers/handleSong'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSongId } from '../../redux/reducers/currentSongSlice'
import { setIsPlayedId } from '../../redux/reducers/isPlayedSlice'
import { fetchTopSongs } from '../../redux/reducers/songListSlice'

const TopSong = () => {
  const currentSongId = useSelector((state) => state.currentSongId.id)
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()
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

  const handlePlayButton = (songId) => {
    dispatch(fetchTopSongs())
    handlePlay(songId, dispatch, setCurrentSongId, setIsPlayedId)
  }

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
                <div className="buttonStop" onClick={() => handleStop(dispatch, setIsPlayedId)}>
                  <FontAwesomeIcon icon={faPause} className='icon' />
                </div>
                :
                <div className="buttonPlay" onClick={() => handlePlayButton(song.songId)}>
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
        <span>{`isPlayedId: ${isPlayedId}`}</span>
      </div>
    </div>
  )
}

export default TopSong

