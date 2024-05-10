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
import { useNavigate } from 'react-router-dom'

const TopSong = () => {
  const currentSongId = useSelector((state) => state.currentSongId.id)
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()
  const [likedIds, setLikedIds] = useState([])
  const [topSongs, setTopSongs] = useState([])
  const navigate = useNavigate()

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

      <div className='song-list'>
        {topSongs && topSongs.map((song, index) => (
          <ul className="item" key={song.songId}>
            <li className='number'>
              {index + 1}
            </li>

            <li className="song-img">
              <img src={song.image} alt="" />
            </li>

            {isPlayedId === song.songId
              ?
              <li className="pause-button" onClick={() => handleStop(setIsPlayedId, dispatch)}>
                <FontAwesomeIcon icon={faPause} className='icon' />
              </li>
              :
              <li className="play-button" onClick={() => handlePlayButton(song.songId)}>
                <FontAwesomeIcon icon={faPlay} className='icon' />
              </li>
            }

            <li className='song-title'>
              {song.title}
            </li>

            <li
              className='artist-name'
              onClick={() => navigate(`/artist/${song.artistId}`)}
            >
              {song.artistName}
            </li>


            <li className='played-count'>
              {`${song.playedCount} Plays`}
            </li>

            <li
              className='album-name'
              onClick={() => navigate(`/album/${song.albumId}/songs`)}
            >
              {song.albumName}
            </li>

            <li className='duration'>
              {song.duration}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default TopSong

