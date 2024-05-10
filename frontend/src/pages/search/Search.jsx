import React, { useEffect, useState } from 'react'
import "./search.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import SearchResultContent from '../../components/search/searchContent/SearchContent'
import axios from "axios"
import { useSearchParams } from 'react-router-dom'
import MusicPlayer from '../../components/musicPlayer/MusicPlayer'

const Search = () => {
  const [artists, setArtists] = useState(null)
  const [songs, setSongs] = useState(null)
  const [albums, setAlbums] = useState(null)
  const [topResult, setTopResult] = useState(null)
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q')

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/search?q=${encodeURIComponent(searchQuery)}`)

        const data = res.data
        setTopResult(data.topResult)
        setArtists(data.searchResults.artists)
        setSongs(data.searchResults.songs)
        setAlbums(data.searchResults.albums)
      } catch (err) {
        console.log('SongSearch: ', err.message)
      }
    }
    getSearchResults()
  }, [searchQuery])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div className='layout'>
      <Sidebar currentPage='search' />
      <div className="search-page">
        <Navbar />
        <div className="search-page-child">
          <SearchResultContent
            topResult={topResult}
            artists={artists}
            songs={songs}
            albums={albums}
          />
        </div>
      </div>
      <MusicPlayer />
    </div>
  )
}

export default Search