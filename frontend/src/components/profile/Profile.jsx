import React, { useContext, useState } from 'react'
// import './profile.css'
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
    <div className='fixed flex justify-end items-center gap-3 md:gap-4 right-4 w-fit'>
      <div className='flex p-1 cursor-pointer'>
        <FontAwesomeIcon icon={faBell} className='text-lg' />
      </div>

      <div className='flex p-1 cursor-pointer'>
        <FontAwesomeIcon icon={faGear} className='text-lg' />
      </div>

      <div className='flex p-1 items-center gap-3 cursor-pointer' onClick={toggleMenu}>
        <div className='w-7 h-7 md:w-8 md:h-8'>
          <img src='https://asset.kompas.com/crops/EzArxmQwntaV_Vv7DWbhy8Vkyq0=/163x106:1437x955/750x500/data/photo/2020/06/09/5edf2c6d0da52.jpg' alt='' className='h-full w-full' />
        </div>
        <h3 className='flex justify-end text-sm md:text-base font-bold max-w-[100px] cursor-pointer'>
          {userName.length > 15
            ? userName.slice(0, 13) + '...'
            : userName}
        </h3>
      </div>
      {
        profileMenu && (
          <ul className='absolute top-12 flex flex-col bg-gray-dark rounded-md text-base text-white overflow-hidden'>
            <li className='py-3 px-5 hover:bg-gray-dark-hover cursor-pointer'>Profile</li>
            <li className='py-3 px-5 hover:bg-gray-dark-hover cursor-pointer'>Upgrade to Premium</li>
            <li className='py-3 px-5 hover:bg-gray-dark-hover cursor-pointer'>Setting</li>
            <hr className='text-gray opacity-50' />
            <li className='py-3 px-5 hover:bg-gray-dark-hover cursor-pointer' onClick={handleLogout}>Logout</li>
          </ul>
        )
      }
    </div>
  )
}

export default Profile