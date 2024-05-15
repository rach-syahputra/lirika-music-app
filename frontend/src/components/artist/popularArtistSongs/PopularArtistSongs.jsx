import React, { useEffect, useState } from 'react'
import './popularArtistSongs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useParams } from 'react-router-dom'
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
  const navigate = useNavigate()

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
    // wrapper
    <div className='component-wrapper'>
      {/* buttons container */}
      <div className='flex items-center gap-4'>
        <div className='light-button' onClick={() => handlePlayButton(firstSongId)}>
          <FontAwesomeIcon icon={faPlay} /> Play
        </div>
        <div className='light-button'>
          <FontAwesomeIcon icon={faShuffle} /> Shuffle
        </div>
        <div className='dark-button'>
          Follow
        </div>
      </div>

      {/* header */}
      <div className='py-4'>
        <span className='text-xl md:text-2xl font-bold'>Songs</span>
      </div>

      {/* song list container */}
      <ul className='flex flex-col'>
        {songs.map((song, index) => (
          // song list item container
          <li className='flex w-full h-14 lg:h-16 items-center group' key={song.songId}>
            <span className='hidden md:flex shrink-0 w-6 text-base text-gray'>
              {index + 1}
            </span>
            {/* image and buttons container */}
            <span className='flex shrink-0 relative h-9 md:h-10 lg:h-11 w-14'>
              <img className='h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11' src={song.image} alt='' />
              {isPlayedId === song.songId
                ?
                <span
                  className='absolute flex items-center justify-center h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 rounded-md bg-gray-dark bg-opacity-60 cursor-pointer'
                  onClick={() => handleStop(setIsPlayedId, dispatch)}
                >
                  <FontAwesomeIcon icon={faPause} className='icon' />
                </span>
                :
                <span
                  className='hidden absolute group-hover:flex items-center justify-center h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 rounded-md bg-gray-dark bg-opacity-60 cursor-pointer'
                  onClick={() => handlePlayButton(song.songId)}
                >
                  <FontAwesomeIcon icon={faPlay} className='icon' />
                </span>
              }
            </span>

            <span className='flex grow-[2] basis-[300px] pr-2 text-sm md:text-base font-bold'>
              {song.title}
            </span>

            <span
              className='flex grow basis-[250px] pr-2 text-sm md:text-base text-gray hover:underline cursor-pointer'
              onClick={() => navigate(`/artist/${song.artistId}`)}
            >
              {song.artistName}
            </span>


            <span className='hidden xl:flex xl:basis-[200px] pr-2 text-sm md:text-base text-gray'>
              {`${song.playedCount} Plays`}
            </span>

            <span
              className='flex basis-[250px] pr-2 text-sm md:text-base text-gray hover:underline cursor-pointer'
              onClick={() => navigate(`/album/${song.albumId}/songs`)}
            >
              {song.albumName}
            </span>

            <span className='hidden lg:flex justify-end pr-5 basis-[100px] text-sm md:text-base text-gray'>
              {song.duration}
            </span>
          </li>
        ))}
        <span
          className='text-gray text-xs md:text-sm mt-2 w-fit h-fit cursor-pointer hover:underline'
          onClick={() => navigate(`/artist/${artistId}/songs`)}
        >
          See more</span>
      </ul>

    </div>
  )
}

export default PopularArtistSongs