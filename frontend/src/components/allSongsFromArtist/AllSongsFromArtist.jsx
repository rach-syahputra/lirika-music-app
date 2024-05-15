import React, { useEffect, useState } from 'react'
import "./allSongsFromArtist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistSongs } from '../../redux/reducers/songListSlice'
import { handleStop } from '../../handlers/handleSong'
import { setIsPlayedId } from '../../redux/reducers/isPlayedSlice'
import { useNavigate, useParams } from 'react-router-dom'

const AllSongsFromArtist = () => {
  const { artistId } = useParams()
  const [songs, setSongs] = useState([])
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    // wrapper
    <div className='component-wrapper'>
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
      </ul>

    </div>
  )
}

export default AllSongsFromArtist