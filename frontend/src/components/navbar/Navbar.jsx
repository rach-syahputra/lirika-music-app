import React from 'react'
import "./navbar.css"
import Search from '../search/Search'
import Profile from '../profile/Profile'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Search />
      <Profile />
    </div>
  )
}

export default Navbar