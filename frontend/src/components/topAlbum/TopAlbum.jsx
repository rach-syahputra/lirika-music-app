import React, { useEffect, useState } from 'react'
// import './topAlbum.css'
import axios from 'axios'
import { truncateText } from '../../utils/truncation.js'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbumSongs } from '../../redux/reducers/songListSlice.js'

const TopAlbum = () => {
  const [topAlbums, setTopAlbums] = useState()
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const getTopAlbums = async () => {
      try {
        const res = await axios.get('http://localhost:8800/api/album/topAlbums')

        setTopAlbums(res.data)
      } catch (err) {
        console.log('TopAlbums: ', err.message)
      }
    }
    getTopAlbums()
  }, [])

  const handlePlayButton = async (albumId) => {
    await dispatch(fetchAlbumSongs({ albumId })).unwrap()
    navigate(`/album/${albumId}/songs`)
  }

  return (
    <div className='component-wrapper h-[304px] md:h-[344px] mb-4'>
      <div className='component-header'>
        <span className='header'>Top Albums</span>
      </div>

      <ul className='list-component custom-scrollbar'>
        {topAlbums && topAlbums.map(album => (
          <li className='list-container' key={album.albumId}>
            <div className='image-container'>
              <img
                src={album.image}
                alt=''
                onClick={() => navigate(`/album/${album.albumId}/songs`)}
                className='square-image-list'
              />
              <div
                className='rounded-play-button'
                onClick={() => (handlePlayButton(album.albumId))}
              >
                <FontAwesomeIcon icon={faPlay} className='icon' />
              </div>
            </div>
            {/* info */}
            <div className='flex flex-col'>
              <span className='text-sm lg:text-base font-bold' >
                {truncateText(album.albumName, 18)}
              </span>

              <span
                className='text-sm lg:text-base text-gray hover:underline cursor-pointer'
                onClick={() => navigate(`/artist/${album.artistId}`)}
              >
                {truncateText(album.artistName, 18)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TopAlbum