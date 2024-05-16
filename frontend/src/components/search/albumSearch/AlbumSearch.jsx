import React from 'react'
import './albumSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { truncateText } from '../../../utils/truncation'
import { useNavigate } from 'react-router-dom'
import { fetchAlbumSongs } from '../../../redux/reducers/songListSlice'
import { useDispatch } from 'react-redux'

const AlbumSearch = ({ albums }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlePlayButton = async (albumId) => {
    await dispatch(fetchAlbumSongs({ albumId })).unwrap()
    navigate(`/album/${albumId}/songs`)
  }
  return (
    <div className='component-wrapper h-[304px] md:h-[344px]'>
      <div className='component-header'>
        <span className='header'>Album</span>
      </div>

      <ul className='list-component hover:overflow-x-scroll custom-scrollbar'>
        {albums && albums.map(album => (
          <li className='list-container' key={album.albumId}>
            <div className='image-container'>
              <img src={album.albumImage} alt='' className='square-image-list' />
              <div
                className='rounded-play-button'
                onClick={() => (handlePlayButton(album.albumId))}
              >
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>
            <div className='flex flex-col'>
              <span className='text-sm lg:text-base font-bold' >
                {truncateText(album.albumName, 20)}
              </span>
              <span className='text-sm lg:text-base text-gray hover:underline cursor-pointer'>Album</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AlbumSearch