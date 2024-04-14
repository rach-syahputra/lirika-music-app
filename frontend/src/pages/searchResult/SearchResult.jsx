import React from 'react'
import "./searchResult.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import SearchResultContent from '../../components/searchResultContent/SearchResultContent'

const SearchResult = () => {
  return (
    <div className='container'>
      <Sidebar currentPage='search' />
      <div className="searchResult">
        <Navbar />
        <div className="searchContent">
          <SearchResultContent />
        </div>
      </div>
    </div>
  )
}

export default SearchResult