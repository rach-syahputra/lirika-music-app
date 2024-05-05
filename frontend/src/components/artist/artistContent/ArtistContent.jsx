import React from 'react'
import "./artistContent.css"
import ArtistImageCover from '../artistImageCover/ArtistImageCover'
import ArtistSongs from '../artistSongs/ArtistSongs'
import ArtistAlbums from '../artistAlbums/ArtistAlbums'
import ArtistAbout from '../artistAbout/ArtistAbout'

const ArtistContent = () => {
  return (
    <div className="artist-content">
      <ArtistImageCover />
      <ArtistSongs />
      <ArtistAlbums />
      <ArtistAbout />
    </div>
  )
}

export default ArtistContent