import React, { useEffect, useState } from 'react'
import "./allSongsFromArtist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistSongs } from '../../redux/reducers/songListSlice'
import { handleStop } from '../../handlers/handleSong'
import { setIsPlayedId } from '../../redux/reducers/isPlayedSlice'
import { useParams } from 'react-router-dom'

const AllSongsFromArtist = () => {
  const { artistId } = useParams()
  const [songs, setSongs] = useState([])
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllSongsFromArtist()
  }, [])

  const getAllSongsFromArtist = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/song/artist/${artistId}/songs`)

      const data = res.data

      setSongs(data)
    } catch (error) {
      console.log('AllSongsFromArtist Error', error.message)
    }
  }

  const handlePlayButton = (artistId, songId) => {
    dispatch(fetchArtistSongs({ artistId, songId }))
  }

  return (
    <div className="all-songs-from-artist">
      <div className="header">
        <h2>Songs</h2>
      </div>

      <div className='song-list'>
        {songs && songs.map((song, index) => (
          <ul className="item" key={song.songId}>
            <li>
              <h3 className='no'>
                {index + 1}
              </h3>
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
              <li className="play-button" onClick={() => handlePlayButton(artistId, song.songId)}>
                <FontAwesomeIcon icon={faPlay} className='icon' />
              </li>
            }

            <li>
              <h3 className='song-title'>
                {song.title}
              </h3>
            </li>

            <li>
              <h4 className='artist-name'>
                {song.artistName}
              </h4>
            </li>

            <li>
              <h4 className='played-count'>
                {`${song.playedCount} Plays`}
              </h4>
            </li>

            <li>
              <h4 className='album-name'>
                {song.albumName}
              </h4>
            </li>

            <li >
              <h4 className='duration'>
                {song.duration}
              </h4>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default AllSongsFromArtist