import React, { useEffect, useState } from 'react'
import './topArtist.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchArtistSongs } from '../../redux/reducers/songListSlice'
import { truncateText } from '../../utils/truncation'

const TopArtist = () => {
  const [topArtists, setTopArtists] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    getTopArtists()
  }, [])

  const getTopArtists = async () => {
    try {
      const res = await axios.get('http://localhost:8800/api/artist/topArtist')

      setTopArtists(res.data)
    } catch (err) {
      console.log('TopArtist: ', err.message)
    }
  }

  const handlePlayButton = async (artistId) => {
    try {
      await dispatch(fetchArtistSongs({ artistId })).unwrap()
      navigate(`/artist/${artistId}`)
    } catch (error) {

    }

  }

  return (
    // wrapper
    <div className='component-wrapper mb-4 h-[310px] md:h-[350px] '>
      {/* header */}
      <div className='component-header'>
        <h2 className='header'>Top Artists</h2>
      </div>

      {/* top artist container */}
      <ul className='list-component custom-scrollbar'>
        {topArtists && topArtists.map(artist => (
          // top artist list
          <li className='list-container' key={artist.artistId}>
            {/* image container */}
            <div className='image-container'>
              <img
                src={artist.image}
                alt=''
                className='round-image-list'
                onClick={() => navigate(`/artist/${artist.artistId}`)}
              />
              <div
                className='rounded-play-button'
                onClick={() => (handlePlayButton(artist.artistId))}
              >
                <FontAwesomeIcon icon={faPlay} />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-sm lg:text-base font-bold' >
                {truncateText(artist.artistName, 17)}
              </span>
              <span className='list text-sm md:text-base text-gray'>{artist.country}</span>
            </div>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default TopArtist