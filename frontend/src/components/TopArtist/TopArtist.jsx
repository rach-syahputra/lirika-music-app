import React, { useEffect, useState } from 'react'
// import './topArtist.css'
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
    <div className='mt-4 p-4 h-[310px] md:h-[350px] bg-gray-dark rounded-md mb-4'>
      <div className='flex mb-4'>
        <h2 className='text-xl md:text-2xl'>Top Artists</h2>
      </div>

      <ul className='flex w-full pb-4 gap-4 overflow-hidden hover:overflow-x-scroll custom-scrollbar'>
        {topArtists && topArtists.map(artist => (
          <li className='flex flex-col gap-2' key={artist.artistId}>
            <div
              className='flex relative h-[150px] w-[150px] md:h-[180px] md:w-[180px] group'
              onClick={() => navigate(`/artist/${artist.artistId}`)}
            >
              <img src={artist.image} alt='' className='rounded-full' />
              <div
                className='absolute flex items-center justify-center rounded-full w-12 h-12 bg-gray-dark bg-opacity-80 hover:bg-opacity-100 opacity-0 group-hover:opacity-100 hover:scale-110 -bottom-3 group-hover:bottom-4 right-4 duration-300'
                onClick={() => (handlePlayButton(artist.artistId))}
              >
                <FontAwesomeIcon icon={faPlay} className='icon' />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-base xl:text-lg font-bold' >
                {truncateText(artist.artistName, 17)}
              </h3>
              <h4 className='text-base'>{artist.country}</h4>
            </div>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default TopArtist