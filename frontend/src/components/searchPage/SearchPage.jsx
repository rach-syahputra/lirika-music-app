import React from 'react'
import "./searchPage.css"
import RecommendedAlbum from '../recommendedAlbum/RecommendedAlbum'
import NewReleases from '../newReleases/NewReleases'
import TrendingSong from '../trendingSong/TrendingSong'

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <RecommendedAlbum />
      <NewReleases />
      <TrendingSong />
    </div>
  )
}

export default SearchPage