import React, { useContext } from 'react'
import "./profile.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../hooks/authContext'

const Profile = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className='profile'>
      <FontAwesomeIcon icon={faBell} className='icon' />
      <FontAwesomeIcon icon={faGear} className='icon' />
      <div className="userInfo">
        <div className="imgContainer">
          <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <h3>{currentUser ? currentUser.name : 'User Name'}</h3>
      </div>
    </div>
  )
}

export default Profile