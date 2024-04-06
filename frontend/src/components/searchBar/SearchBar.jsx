import React from 'react'
import "./searchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className="searchBar">
      <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
      <input type="text" placeholder='Type here to search' />
    </div>
  )
}

export default SearchBar