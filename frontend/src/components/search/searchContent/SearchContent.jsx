import React from 'react'
// import "./searchContent.css"
import ArtistSearch from '../artistSearch/ArtistSearch'
import SongSearch from '../songSearch/SongSearch'
import AlbumSearch from '../albumSearch/AlbumSearch'
import TopResult from '../topResult/TopResult'

const SearchContent = ({ topResult, artists, songs, albums }) => {
  return (
    <div className='flex flex-col gap-4 w-full'>
      {topResult && <TopResult topResult={topResult} />}
      {artists?.length > 0 && <ArtistSearch artists={artists} />}
      {songs?.length > 0 && <SongSearch songs={songs} />}
      {albums?.length > 0 && <AlbumSearch albums={albums} />}
    </div>
  )
}

export default SearchContent