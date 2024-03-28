import React from 'react'
import "./search.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchBar">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
        <input type="text" placeholder='Type here to search' />
      </div>

    </div>
  )
}

export default Search