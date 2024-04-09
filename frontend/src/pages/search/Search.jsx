import React, { useEffect } from 'react'
import "./search.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import SearchPage from '../../components/searchPage/SearchPage'

const Search = () => {

  return (
    <div className="container">
      <Sidebar currentPage='search' />
      <div className="search">
        <Navbar />
        <div className="searchContent">
          <SearchPage />
        </div>
      </div>
    </div>
  )
}

export default Search