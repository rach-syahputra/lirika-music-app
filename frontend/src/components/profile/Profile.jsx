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

  const toggleMenu = () => {
    setProfileMenu(!profileMenu)
  }

  return (
    <div className='profile' onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBell} className='icon' />
      <FontAwesomeIcon icon={faGear} className='icon' />
      <div className="userInfo">
        <div className="imgContainer">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <h3>{currentUser ? currentUser.name : 'User Name'}</h3>
      </div>
      {
        profileMenu && (
          <div className="profileMenu">
            <div className="list">Profile</div>
            <div className="list">Upgrade to Premium</div>
            <div className="list">Setting</div>
            <hr />
            <div className="list" onClick={handleLogout}>Logout</div>
          </div>
        )
      }
    </div>
  )
}

export default Profile