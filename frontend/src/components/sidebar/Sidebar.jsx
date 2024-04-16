import React from 'react'
import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faHouse, faMicrophone, faMusic } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faCompass } from '@fortawesome/free-regular-svg-icons'

const Sidebar = ({ currentPage }) => {

  return (
    <div className='sidebar'>
      <div className="logo">
        LIRIKA
      </div>
      <div className="menu">
        <h5>MENU</h5>
        <ul>
          {/* HOME */}
          <li>
            <Link to='/' className={`list ${currentPage === 'home' && 'isActive'}`}>
              <span className='icon'><FontAwesomeIcon icon={faHouse} /></span> Home
            </Link>
          </li>

          {/* EXPLORE */}
          <li>
            <Link to='/explore' className={`list ${currentPage === 'explore' && 'isActive'}`}>
              <span className='icon'><FontAwesomeIcon icon={faCompass} className='compass' /></span> Explore
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