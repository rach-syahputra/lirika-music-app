import React, { useEffect, useState } from 'react'
import './artistImageCover.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ArtistImageCover = () => {
  const { artistId } = useParams()
  const [artist, setArtist] = useState([])

  useEffect(() => {
    getArtistImageCoverData()
  }, [])

  const getArtistImageCoverData = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/artist/${artistId}/artistImageCover`)

      const data = res.data[0]
      setArtist(data)
    } catch (error) {
      console.log('ArtistImageCover Error', error.message)
    }
  }

  return (

    <div>
      {artist && (
        // wrapper
        <div className='relative rounded-t-md max-w-full h-[350px] bg-gray-dark'>
          {/* image container */}
          <div className='relative w-full h-full'>
            <img src={artist.image} alt='' className='h-full w-full border-0' />
            <div className='absolute top-0 left-0 w-full h-full bg-dark bg-opacity-30'></div>
          </div>
          {/* artist info */}
          <div className='absolute flex flex-col left-4 bottom-4'>
            <span className='text-2xl md:text-4xl font-bold'>{artist.artistName}</span>
            <span className='text-sm md:text-base'>35,290 monthly listeners</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ArtistImageCover