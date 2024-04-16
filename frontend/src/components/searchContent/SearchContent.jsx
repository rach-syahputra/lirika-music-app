import React from 'react'
import "./searchContent.css"
import ArtistSearch from '../artistSearch/ArtistSearch'
import SongSearch from '../songSearch/SongSearch'
import AlbumSearch from '../albumSearch/AlbumSearch'

const SearchContent = () => {
  return (
    <div className='searchContent'>
      <ArtistSearch />
      <SongSearch />
      <AlbumSearch />
    </div>
  )
}

export default SearchContent