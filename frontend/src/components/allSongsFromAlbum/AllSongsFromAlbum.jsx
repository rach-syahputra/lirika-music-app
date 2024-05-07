import React, { useEffect, useState } from 'react'
import "./allSongsFromAlbum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handlePlay, handleStop } from '../../handlers/handleSong'
import { setSongList } from '../../redux/reducers/songListSlice'
import { setCurrentSongId } from '../../redux/reducers/currentSongSlice'
import { setIsPlayedId } from '../../redux/reducers/isPlayedSlice'

const AllSongsFromAlbum = () => {
  const { albumId } = useParams()
  const [songs, setSongs] = useState([])
  const [image, setImage] = useState('')
  const [albumName, setAlbumName] = useState('')
  const [artistName, setArtistName] = useState('')
  const [firstSongId, setFirstSongId] = useState(null)
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllSongsFromAlbum()
  }, [])

  useEffect(() => {
    console.log('SONGS FROM ALBUM', songs)
  }, [songs])

  const handlePlayButton = (songId) => {
    dispatch(setSongList(songs))
    handlePlay(songId, dispatch, setCurrentSongId, setIsPlayedId)
  }

  const getAllSongsFromAlbum = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/song/album/${albumId}/songs`)

      const data = res.data
      setSongs(data)
      setImage(data[0].image)
      setAlbumName(data[0].albumName)
      setArtistName(data[0].artistName)
      setFirstSongId(data[0].songId)
    } catch (error) {
      console.log('PopularArtistSongs Error', error.message)
    }
  }

  return (
    <div className="all-songs-from-album">
      {songs && (
        <>
          <div className="album-container">
            <div className="img-container">
              <img src={image} alt="" />
            </div>

            <div className="album-info">
              <h1 className='album-name'>{albumName}</h1>

              <div className="more-album-details">
                <h4 className='album-and-artist-details'>{`Album • ${artistName}`}</h4>
                <h4 className='total-songs-and-duration'>10 songs • 30 minutes</h4>
              </div>

              <div className="buttons">
                <div className='play-button' onClick={() => handlePlayButton(firstSongId)}>
                  <FontAwesomeIcon icon={faPlay} className='icon' /> Play
                </div>
                <div className='shuffle-button'>
                  <FontAwesomeIcon icon={faShuffle} className='icon' /> Shuffle
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className='song-list'>
            {songs.map((song, index) => (
              <div className="item" key={song.songId}>

                <h3 className='number'>
                  {isPlayedId !== song.songId && (
                    `${index + 1}`
                  )}

                </h3>

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
                  {`${song.playedCount} Plays`}
                </h4>

                <h4 className='duration'>
                  {song.duration}
                </h4>

              </div>
            ))}

          </div>
        </>
      )}
    </div>
  )
}

export default AllSongsFromAlbum