import React, { useEffect, useState } from 'react'
import "./search.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import SearchResultContent from '../../components/searchContent/SearchContent'
import axios from "axios"
import { useSearchParams } from 'react-router-dom'

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
        setArtists(data.searchResults.artists)
        setSongs(data.searchResults.songs)
        setAlbums(data.searchResults.albums)
        setTopResult(data.topResult)
      } catch (err) {
        console.log('SongSearch: ', err.message)
      }
    }
    getSearchResults()
  }, [searchQuery])

  return (
    <div className='container'>
      <Sidebar currentPage='search' />
      <div className="search">
        <Navbar />
        <div className="searchChild">
          <SearchResultContent
            artists={artists}
            songs={songs}
            albums={albums}
          />
        </div>
      </div>
    </div>
  )
}

export default Search