import React, { useEffect, useState } from 'react'
// import './searchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
    <div className='flex'>
      <div className='flex items-center bg-gray-dark gap-2 py-2 px-4 border-2 border-gray rounded-xl box-border w-[300px] lg:w-[450px] focus-within:border-gray-dark duration-300'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-base' />
        <input
          className='bg-gray-dark outline-none border-none w-full overflow-hidden'
          type='text'
          placeholder='Type here to search'
          value={searchQuery}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {
        showSuggestions && (
          <div className='flex flex-col absolute w-[300px] lg:w-[450px] border border-gray-dark rounded-md top-[50%] -z-10 bg-gray-dark select-none pt-7 pb-3 text-gray overflow-hidden'>
            <ul className='flex flex-col'>
              {artists && artists.map(artist => (
                <li
                  className='flex p-4 gap-4 items-center hover:bg-gray-dark-hover cursor-pointer'
                  key={artist.artistId}
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-base' />
                  <h4 className='text-base'>{artist.artistName}</h4>
                </li>
              ))}

              {songs && songs.map(song => (
                <li className='flex p-4 gap-4 items-center hover:bg-gray-dark-hover cursor-pointer' key={song.songId}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-base' />
                  <h4 className='text-base'>{song.songTitle}</h4>
                </li>
              ))}

              {albums && albums.map(album => (
                <li className='flex p-4 gap-4 items-center hover:bg-gray-dark-hover cursor-pointer' key={album.albumId}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='text-base' />
                  <h4 className='text-base'>{album.albumName}</h4>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </div >
  )
}

export default SearchBar