import React from 'react'
import "./searchContent.css"
import ArtistSearch from '../artistSearch/ArtistSearch'
import AlbumSearch from '../albumSearch/AlbumSearch'

const SearchContent = () => {
  return (
    <div className='searchContent'>
      <ArtistSearch />
      <AlbumSearch />
    </div>
  )
}

export default SearchContent