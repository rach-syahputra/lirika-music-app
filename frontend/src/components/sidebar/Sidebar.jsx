import React from 'react'
import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faHouse, faMagnifyingGlass, faMicrophone, faMusic } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Sidebar = ({ currentPage }) => {

  return (
    <div className='sidebar'>
      <div className="logo">
        LIRIKA
      </div>
      <div className="menu">
        <h5>MENU</h5>
        <ul>
          <li>
            <Link to='/' className={`list ${currentPage === 'home' && 'isActive'}`}>
              <span className='icon'><FontAwesomeIcon icon={faHouse} /></span> Home
            </Link>
          </li>

          <li>
            <Link to='/search' className={`list ${currentPage === 'search' && 'isActive'}`}>
              <span className='icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></span> Search
            </Link>
          </li>

          <li>
            <Link to='/' className='list'><span className='icon'><FontAwesomeIcon icon={faMusic} /></span> Genre</Link>
          </li>

          <li>
            <Link to='/' className='list'><span className='icon'><FontAwesomeIcon icon={faCompactDisc} /></span> Album</Link>
          </li>

          <li>
            <Link to='/' className='list'><span className='icon'><FontAwesomeIcon icon={faMicrophone} /></span> Artist</Link>
          </li>
        </ul>
      </div>

      <div className="footer">
        All Right Reserved 2024
      </div>
    </div>
  )
}

export default Sidebar