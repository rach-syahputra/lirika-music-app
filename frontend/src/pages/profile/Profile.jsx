import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Profile = () => {
  return (
    <div className='component-wrapper flex flex-col'>
      <h1 className='text-2xl'>Lorem ipsum dolor sit amet.</h1>
      <button className='light-button'>
        <FontAwesomeIcon icon={faPlay} className='icon' />
        Play
      </button>
      <button className='dark-button'>
        <FontAwesomeIcon icon={faPlay} className='icon' />
        Play
      </button>
      <img className='song-image' src="https://f4.bcbits.com/img/a2293656915_2.jpg" alt="" />
      <li className='song-title'>Djevelen I Nord</li>
      <li className='song-list'>Djevelen I Nord</li>
      <li className='component-header text-'>Djevelen I Nord</li>
    </div>
  )
}

export default Profile