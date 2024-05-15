import React from 'react'
// import './topResultAlbum.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchAlbumSongs } from '../../../redux/reducers/songListSlice'
import { useNavigate } from 'react-router-dom'

const TopResultAlbum = ({ topResult }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlayButton = async (albumId) => {
    await dispatch(fetchAlbumSongs({ albumId })).unwrap()
    navigate(`/album/${topResult.albumId}/songs`)
    // handlePlay(songId, dispatch, setCurrentSongId, setIsPlayedId)
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

        {/* album info */}
        <div className='flex flex-col gap-4'>
          <span className='w-fit text-base md:text-xl font-bold'>
            {topResult.album_name}
          </span>

          <div className='flex gap-1 text-sm text-gray'>
            <span>Album</span>
            •
            <span>{topResult.artist_name}</span>
          </div>

          {/* buttons */}
          <div className='flex gap-3'>
            <div className='light-button' onClick={() => handlePlayButton(topResult.albumId)}>
              <FontAwesomeIcon icon={faPlay} className='icon' /> Play
            </div>
            <div className='light-button'>
              <FontAwesomeIcon icon={faShuffle} className='icon' /> Shuffle
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopResultAlbum