import React from 'react'
import './topResultSong.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchArtistSongs } from '../../../redux/reducers/songListSlice'
import { useNavigate } from 'react-router-dom'

const TopResultSong = ({ topResult }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlayButton = async (artistId, songId) => {
    await dispatch(fetchArtistSongs({ artistId, songId })).unwrap()
    navigate(`/artist/${artistId}/songs`)
  }

  return (
    // wrapper
    <div className='overflow-hidden'>
      {/* item container */}
      <div className='flex items-center gap-4'>
        {/* image container */}
        <div className='flex h-32 w-32 md:h-36 md:w-36 rounded-md overflow-hidden'>
          <img
            src={topResult.album_image}
            alt=''
            className='h-full w-full'
          />
        </div>

        {/* song info */}
        <div className='flex flex-col gap-4'>
          <span className='w-fit text-base md:text-xl font-bold'>{topResult.song_title}</span>

          <div className='flex gap-1 text-sm text-gray'>
            <span>Song</span>
            •
            <span>{topResult.artist_name}</span>
            •
            <span>{topResult.album_name}</span>
            •
            <span>{topResult.duration}</span>
          </div>


          {/* buttons */}
          <div className='flex gap-3'>
            <div className='light-button' onClick={() => handlePlayButton(topResult.artistId, topResult.songId)}>
              <FontAwesomeIcon icon={faPlay} className='icon' /> Play
            </div>
            <div className='light-button'>
              <FontAwesomeIcon icon={faPlus} className='icon' /> Add
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopResultSong