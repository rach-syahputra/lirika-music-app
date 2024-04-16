import React from 'react'
import "./search.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import SearchResultContent from '../../components/searchContent/SearchContent'

const Search = () => {
  return (
    <div className='container'>
      <Sidebar currentPage='search' />
      <div className="search">
        <Navbar />
        <div className="searchChild">
          <SearchResultContent />
        </div>
      </div>
    </div>
  )
}

export default Search