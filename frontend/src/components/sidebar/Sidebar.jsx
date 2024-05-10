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

        <ul>
          {/* HOME */}

          <Link to='/'>
            <li className={`list ${currentPage === 'home' && 'isActive'}`}>
              <span className='icon'><FontAwesomeIcon icon={faHouse} /></span>
              <span className='page'>Home</span>
            </li>
          </Link>

          {/* EXPLORE */}

          <Link to='/explore'>
            <li className={`list ${currentPage === 'explore' && 'isActive'}`}>
              <span className='icon'><FontAwesomeIcon icon={faCompass} className='compass' /></span>
              <span className='page'>Explore</span>
            </li>
          </Link>

          <li className='list'>
            <span className='icon'><FontAwesomeIcon icon={faMusic} /></span>
            <span className='page'>Genre</span>

          </li>

          <li className='list'>
            <span className='icon'><FontAwesomeIcon icon={faCompactDisc} /></span>
            <span className='page'>Album</span>

          </li>

          <li className='list'>
            <span className='icon'><FontAwesomeIcon icon={faMicrophone} /></span>
            <span className='page'>Artist</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar