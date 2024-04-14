import React from 'react'
import "./searchResultContent.css"
import ArtistResult from '../artistResult/ArtistResult'
import AlbumResult from '../albumResult/AlbumResult'

const SearchResultContent = () => {
  return (
    <div className='searchResultContent'>
      <ArtistResult />
      <AlbumResult />
    </div>
  )
}

export default SearchResultContent