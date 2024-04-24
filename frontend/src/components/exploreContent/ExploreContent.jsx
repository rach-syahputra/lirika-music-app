import React from 'react'
import "./exploreContent.css"
import RecommendedAlbum from '../recommendedAlbum/RecommendedAlbum'
import NewReleases from '../newReleases/NewReleases'
import TrendingSong from '../trendingSong/TrendingSong'

const SearchPage = () => {
  return (
    <div className='exploreContent'>
      <RecommendedAlbum />
      <NewReleases />
      <TrendingSong />
    </div>
  )
}

export default SearchPage