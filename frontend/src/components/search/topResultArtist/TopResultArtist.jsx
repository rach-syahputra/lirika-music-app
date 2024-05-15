import React from 'react'
// import './topResultArtist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtistSongs } from '../../../redux/reducers/songListSlice'
import { Link, useNavigate } from 'react-router-dom'

const TopResultArtist = ({ topResult }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isPlayedId = useSelector((state) => state.isPlayedId.id)

  const handlePlayButton = async (artistId) => {
    try {
      await dispatch(fetchArtistSongs({ artistId })).unwrap()
      console.log('ISPLAYED', isPlayedId)
      navigate(`/artist/${topResult.artistId}`)
    } catch (error) {
      console.log('TopResultArtist Error', error.message)
    }

  }

  return (
    // wrapper
    <div className='overflow-hidden'>
      {/* item container */}
      <div className='flex items-center gap-4'>
        {/* artist image */}
        <div className='flex h-32 w-32 md:h-36 md:w-36 rounded-full overflow-hidden'>
          <Link to={`/artist/${topResult.artistId}`}>
            <img
              src={topResult.artist_image}
              alt=''
              className='h-full w-full'
            />
          </Link>
        </div>
        {/* artist info */}
        <div className='flex flex-col gap-4'>

          <Link to={`/artist/${topResult.artistId}`}>
            <span className='w-fit text-base md:text-xl font-bold'>{topResult.artist_name}</span>
          </Link>

          <span className='text-sm text-gray'>Artist • 100k Follower</span>

          {/* buttons */}
          <div className='flex gap-3'>
            <div
              className='light-button'
              onClick={() => (handlePlayButton(topResult.artistId))}
            >
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

export default TopResultArtist