import React, { useEffect, useState } from 'react'
import "./artistAlbums.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchAlbumSongs } from '../../../redux/reducers/songListSlice'
import { truncateText } from '../../../utils/truncation'

const ArtistAlbums = () => {
  const { artistId } = useParams()
  const [albums, setAlbums] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    getAllAlbumFromArtist()
  }, [])

  const getAllAlbumFromArtist = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/album/${artistId}`)

      const data = res.data
      setAlbums(data)
    } catch (error) {
      console.log('ArtistAlbums Error', error.message)
    }
  }

  const handlePlayButton = async (albumId) => {
    await dispatch(fetchAlbumSongs({ albumId })).unwrap()
    navigate(`/album/${albumId}/songs`)
  }

  return (
    <div className='component-wrapper h-[304px] md:h-[344px] mb-4'>
      <div className='py-4'>
        <span className='text-xl md:text-2xl font-bold'>Albums</span>
      </div>

      <ul className='flex w-full pb-4 gap-4 overflow-hidden hover:overflow-x-scroll custom-scrollbar'>
        {albums && albums.map(album => (
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
                {truncateText(album.albumName, 20)}
              </span>

              <span
                className='text-xs lg:text-sm text-gray hover:underline cursor-pointer'
                onClick={() => navigate(`/artist/${album.artistId}`)}
              >
                2018
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArtistAlbums