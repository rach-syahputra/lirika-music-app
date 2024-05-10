import React, { useContext, useState } from 'react'
import "./profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../hooks/authContext'
import { handleLogout } from '../../handlers/handleSubmit'

const Profile = () => {
  const { currentUser } = useContext(AuthContext)
  const [profileMenu, setProfileMenu] = useState(false)
  const userName = currentUser ? currentUser.name : 'User Name'

  const toggleMenu = () => {
    setProfileMenu(!profileMenu)
  }

  return (
    <div className='profile'>
      <div className="notification-icon">
        <FontAwesomeIcon icon={faBell} className='icon' />
      </div>

      <div className="setting-icon">
        <FontAwesomeIcon icon={faGear} className='icon' />
      </div>

      <div className="user-info" onClick={toggleMenu}>
        <div className="img-container">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <h3 className='username'>
          {userName.length > 15
            ? userName.slice(0, 13) + '...'
            : userName}
        </h3>
      </div>
      {
        profileMenu && (
          <ul className="profile-menu">
            <li className="list">Profile</li>
            <li className="list">Upgrade to Premium</li>
            <li className="list">Setting</li>
            <hr />
            <li className="list" onClick={handleLogout}>Logout</li>
          </ul>
        )
      }
    </div>
  )
}

export default Profile