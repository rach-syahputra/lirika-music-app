import React, { useEffect, useState } from 'react'
import "./searchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

const SearchBar = () => {
  const navigate = useNavigate()
  const [artists, setArtists] = useState(null)
  const [songs, setSongs] = useState(null)
  const [albums, setAlbums] = useState(null)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchQuery, setSearchQuery] = useState(() => {
    // retrieve the query string parameter then store it in searchQuery state
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get('q') || ''
  })

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/search/suggestions?q=${encodeURIComponent(searchQuery)}`)

        const data = res.data
        setArtists(data.artists)
        setSongs(data.songs)
        setAlbums(data.albums)
      } catch (err) {
        console.log('SearchBar: ', err.message)
      }
    }

    getSearchResults()
  }, [searchQuery])

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    setShowSuggestions(true)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setShowSuggestions(false)
      event.target.blur()

      if (searchQuery) {
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      } else {
        navigate('/')
      }
    }

    if (event.key === 'Escape') {
      setShowSuggestions(false)
      event.target.blur()
    }
  }

  return (
    <div className="searchBar">
      <div className="searchBarInput">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
        <input
          className='input'
          type='text'
          placeholder='Type here to search'
          value={searchQuery}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {showSuggestions && (
        <div className="dropdown">
          <ul>
            {artists && artists.map(artist => (
              <li className='item' key={artist.artistId}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                <h4>{artist.artistName}</h4>
              </li>
            ))}

            {songs && songs.map(song => (
              <li className='item' key={song.songId}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                <h4>{song.songTitle}</h4>
              </li>
            ))}

            {albums && albums.map(album => (
              <li className='item' key={album.albumId}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                <h4>{album.albumName}</h4>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar