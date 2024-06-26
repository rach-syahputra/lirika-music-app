import React, { useEffect, useState } from 'react'
// import './topSong.css'
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
        const res = await axios.get('http://localhost:8800/api/song/topSongs')

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
    // wrapper
    <div className='p-0 bg-gray-dark rounded-md'>
      <div className='p-4 flex justify-between'>
        <h2 className='text-xl md:text-2xl'>Top Songs</h2>
        <h4>See All</h4>
      </div>

      {/* song items container */}
      <ul className='flex flex-col'>
        {topSongs && topSongs.map((song, index) => (
          // song item container
          <li className='flex w-full h-14 lg:h-16 px-4 items-center hover:bg-gray-dark-hover group' key={song.songId}>
            <span className='hidden md:flex shrink-0 w-6 text-base text-gray'>
              {index + 1}
            </span>
            {/* image and buttons container */}
            <div className='flex shrink-0 relative h-9 md:h-10 lg:h-11 w-14'>
              <img className='h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11' src={song.image} alt='' />
              {isPlayedId === song.songId
                ?
                <span
                  className='absolute flex items-center justify-center h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 rounded-md bg-gray-dark bg-opacity-80 cursor-pointer'
                  onClick={() => handleStop(setIsPlayedId, dispatch)}
                >
                  <FontAwesomeIcon icon={faPause} className='icon' />
                </span>
                :
                <span
                  className='hidden absolute group-hover:flex items-center justify-center h-9 w-9 md:h-10 md:w-10 lg:h-11 lg:w-11 rounded-md bg-gray-dark bg-opacity-80 cursor-pointer'
                  onClick={() => handlePlayButton(song.songId)}
                >
                  <FontAwesomeIcon icon={faPlay} className='icon' />
                </span>
              }
            </div>

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
      </ul>
    </div>
  )
}

export default TopSong

