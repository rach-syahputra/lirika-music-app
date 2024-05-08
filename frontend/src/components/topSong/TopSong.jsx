import React, { useEffect, useState } from 'react'
import "./topSong.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPause, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { handleToggleLike, isLiked, handlePlay, handleStop } from '../../handlers/handleSong'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSongId } from '../../redux/reducers/currentSongSlice'
import { setIsPlayedId } from '../../redux/reducers/isPlayedSlice'
import { fetchTopSongs } from '../../redux/reducers/songListSlice'
import { Link } from 'react-router-dom'

const TopSong = () => {
  const currentSongId = useSelector((state) => state.currentSongId.id)
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()
  const [likedIds, setLikedIds] = useState([])
  const [topSongs, setTopSongs] = useState([])

  useEffect(() => {
    const getTopSongs = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/song/topSongs")

        setTopSongs(res.data)

        // if user just logged in or the page is first time rendered
        if (!currentSongId) {
          dispatch(fetchTopSongs())
        }

      } catch (err) {
        console.log('TopSongs Error: ', err.message)
      }
    }
    getTopSongs()
  }, [])

  const handlePlayButton = (songId) => {
    dispatch(fetchTopSongs())
    handlePlay(songId, setCurrentSongId, setIsPlayedId, dispatch)
  }

  return (
    <div className='top-songs'>
      <div className="header">
        <h2>Top Songs</h2>
        <h4>See All</h4>
      </div>

      <div className="top-songs-list">
        {topSongs.length > 0 && topSongs.map((song, index) => (
          <div className="item" key={song.songId}>

            <div className="info">
              <h4 className='number'>{index + 1}</h4>

              <Link to={`/album/${song.albumId}/songs`}>
                <img src={song.image} alt="" />
              </Link>

              <div className="title-and-artist">
                <h3 className='title'>{song.title}</h3>
                <Link to={`/artist/${song.artistId}`}>
                  <h4 className='artist-name'>{song.artist}</h4>
                </Link>
              </div>
            </div>

            <div className="action">
              <h3>{song.duration}</h3>

              {isPlayedId === song.songId
                ?
                <div className="stop-button" onClick={() => handleStop(setIsPlayedId, dispatch)}>
                  <FontAwesomeIcon icon={faPause} className='icon' />
                </div>
                :
                <div className="play-button" onClick={() => handlePlayButton(song.songId)}>
                  <FontAwesomeIcon icon={faPlay} className='icon' />
                </div>
              }

              {isLiked(likedIds, song.songId)
                ?
                <div className="check-button" onClick={() => handleToggleLike(likedIds, setLikedIds, song.songId)}>
                  <FontAwesomeIcon icon={faCheck} className='icon' />
                </div>
                :
                <div className="plus-button" onClick={() => handleToggleLike(likedIds, setLikedIds, song.songId)}>
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

