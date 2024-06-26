import React from 'react'
import "./artistContent.css"
import ArtistImageCover from '../artistImageCover/ArtistImageCover'
import PopularArtistSongs from '../popularArtistSongs/PopularArtistSongs'
import ArtistAlbums from '../artistAlbums/ArtistAlbums'
import ArtistAbout from '../artistAbout/ArtistAbout'

const ArtistContent = () => {
  return (
    <div className='component-wrapper p-0'>
      <ArtistImageCover />
      <PopularArtistSongs />
      <ArtistAlbums />
      <ArtistAbout />
    </div>
  )
}

export default ArtistContent