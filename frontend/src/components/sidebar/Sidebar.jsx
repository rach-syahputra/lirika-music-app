import React from 'react'
import "./sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faCompactDisc, faMicrophone, faMusic } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="logo">
        LIRIKA
      </div>

      <div className="menu">
        <h5>MENU</h5>
        <ul>
          <li><span className='icon'><FontAwesomeIcon icon={faBolt} /></span> Explore</li>
          <li><span className='icon'><FontAwesomeIcon icon={faMusic} /></span> Genre</li>
          <li><span className='icon'><FontAwesomeIcon icon={faCompactDisc} /></span> Album</li>
          <li><span className='icon'><FontAwesomeIcon icon={faMicrophone} /></span> Artist</li>
        </ul>
      </div>

      <div className="footer">
        All Right Reserved 2024
      </div>
    </div>
  )
}

export default Sidebar