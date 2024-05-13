import React from 'react'
// import "./navbar.css"
import Profile from '../profile/Profile'
import SearchBar from '../searchBar/SearchBar'

const Navbar = () => {
  return (
    <div className='flex fixed items-center justify-between w-full h-[75px] px-4 z-10 ml-[75px] md:ml-[195px] lg:ml-[240px] bg-dark'>
      <SearchBar />
      <Profile />
    </div>
  )
}

export default Navbar