import React, { useEffect } from 'react'
import "./navbar.css"
import Profile from '../profile/Profile'
import SearchBar from '../searchBar/SearchBar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <SearchBar />
      <Profile />
    </div>
  )
}

export default Navbar