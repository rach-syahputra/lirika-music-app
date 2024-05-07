import React, { useEffect, useState } from 'react'
import "./popularArtistSongs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setIsPlayedId } from '../../../redux/reducers/isPlayedSlice'
import { handlePlay, handleStop } from '../../../handlers/handleSong'
import { fetchArtistSongs } from '../../../redux/reducers/songListSlice'
import { setCurrentSongId } from '../../../redux/reducers/currentSongSlice'

const PopularArtistSongs = () => {
  const { artistId } = useParams()
  const [songs, setSongs] = useState([])
  const [firstSongId, setFirstSongId] = useState(null)
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()

  useEffect(() => {
    getPopularSongsFromArtist()
  }, [])

  const getPopularSongsFromArtist = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/song/find/popularSongsFromArtist/${artistId}`)

      const data = res.data
      setSongs(data)
      setFirstSongId(data[0].songId)
    } catch (error) {
      console.log('PopularArtistSongs Error', error.message)
    }
  }

  const handlePlayButton = (songId) => {
    dispatch(fetchArtistSongs({ artistId, songId }))
    handlePlay(songId, dispatch, setCurrentSongId, setIsPlayedId)
  }

  return (
    <div className='popular-artist-songs'>
      <div className="top-buttons">
        <div className='play-button' onClick={() => handlePlayButton(firstSongId)}>
          <FontAwesomeIcon icon={faPlay} className='icon' /> Play
        </div>
        <div className='shuffle-button'>
          <FontAwesomeIcon icon={faShuffle} className='icon' /> Shuffle
        </div>
        <div className='follow-button'>
          Follow
        </div>
      </div>
      <div className="header">
        <h2>Songs</h2>
      </div>
      <div className='song-list'>
        {songs && songs.map((song, index) => (
          <div className="item" key={song.songId}>
            <h4 className='number'>
              {index + 1}
            </h4>
            <div className="song-img">
              <img src={song.image} alt="" />
            </div>

            {isPlayedId === song.songId
              ?
              <div className="pause-button" onClick={() => handleStop(dispatch, setIsPlayedId)}>
                <FontAwesomeIcon icon={faPause} className='icon' />
              </div>
              :
              <div className="play-button" onClick={() => handlePlayButton(song.songId)}>
                <FontAwesomeIcon icon={faPlay} className='icon' />
              </div>
            }

            <h3 className='song-title' >
              {song.title}
            </h3>

            <h4 className='artist-name'>
              {song.artistName}
            </h4>

            <h4 className='played-count'>
              {`${song.playedCount} plays`}
            </h4>

            <h4 className='album-name'>
              {song.albumName}
            </h4>

          </div>
        ))}
        <div className="see-more">
          <h4>See more</h4>
        </div>
      </div>

    </div>
  )
}

export default PopularArtistSongs