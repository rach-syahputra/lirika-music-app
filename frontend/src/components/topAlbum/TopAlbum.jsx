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
      <div className='flex mb-4'>
        <span className='text-xl md:text-2xl font-bold'>Top Albums</span>
      </div>

      <ul className='flex w-full pb-4 gap-4 overflow-hidden hover:overflow-x-scroll custom-scrollbar'>
        {topAlbums && topAlbums.map(album => (
          <li className='flex flex-col gap-2' key={album.albumId}>
            <div className='flex relative h-36 w-36 md:h-44 md:w-44 rounded-sm group'>
              <img
                src={album.image}
                alt=''
                onClick={() => navigate(`/album/${album.albumId}/songs`)}
                className='cursor-pointer'
              />
              <div
                className='absolute flex items-center justify-center rounded-full w-12 h-12 bg-gray-dark bg-opacity-80 hover:bg-opacity-100 opacity-0 group-hover:opacity-100 hover:scale-110 -bottom-3 group-hover:bottom-4 right-4 duration-300 cursor-pointer'
                onClick={() => (handlePlayButton(album.albumId))}
              >
                <FontAwesomeIcon icon={faPlay} className='icon' />
              </div>
            </div>
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