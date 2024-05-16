import React from 'react'
// import './artistSearch.css'
import { truncateText } from '../../../utils/truncation'

const ArtistSearch = ({ artists }) => {
  return (
    <div className='component-wrapper h-[304px] md:h-[344px]'>
      <div className='component-header'>
        <span className='header'>Artist</span>
      </div>

      <ul className='list-component hover:overflow-x-scroll custom-scrollbar'>
        {artists && artists.map(artist => (
          <li className='list-container' key={artist.artistId}>
            <div className='image-container'>
              <img src={artist.image} alt='' className='round-image-list' />
            </div>
            <div className='flex flex-col items-center'>
              <span className='text-sm lg:text-base font-bold' >
                {truncateText(artist.artistName, 16)}
              </span>
              <span className='text-sm md:text-base text-gray'>Artist</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ArtistSearch