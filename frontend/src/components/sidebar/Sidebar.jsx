import React from 'react'
// import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faHouse, faMicrophone, faMusic } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-regular-svg-icons'

const Sidebar = ({ currentPage }) => {

  return (
    <div className='fixed bg-gray-dark w-[75px] md:w-[195px] lg:w-[240px] h-full flex flex-col gap-8'>
      <div className='flex justify-center md:justify-start py-4 md:px-4 text-green-light font-bold text-base md:text-xl lg:text-2xl'>
        LIRIKA
      </div>

      <ul className='flex flex-col justify-start gap-6 md:gap-4 px-[25%]'>
        {/* HOME */}
        <li className={`flex items-center md:gap-1 lg:gap-2 select-none cursor-pointer w-fit hover:text-green-light hover:text-opacity-60 duration-300 ${currentPage === 'home' && 'text-green-light'}`}>
          <span className='flex items-center justify-center h-8 w-8'>
            <FontAwesomeIcon icon={faHouse} className='text-2xl md:text-lg lg:text-xl' />
          </span>
          <span className='hidden md:inline md:text-base lg:text-lg font-bold'>Home</span>
        </li>

        {/* EXPLORE */}
        <li className={`flex items-center md:gap-1 lg:gap-2 select-none cursor-pointer w-fit hover:text-green-light hover:text-opacity-60 duration-300 ${currentPage === 'explore' && 'text-green-light'}`}>
          <span className='flex items-center justify-center h-8 w-8'>
            <FontAwesomeIcon icon={faCompass} className='text-[26px] md:text-[21px] lg:text-2xl' />
          </span>
          <span className='hidden md:inline md:text-base lg:text-lg font-bold'>Explore</span>
        </li>

        <li className='flex items-center md:gap-1 lg:gap-2 select-none cursor-pointer w-fit hover:text-green-light hover:text-opacity-60 duration-300'>
          <span className='flex items-center justify-center h-8 w-8'>
            <FontAwesomeIcon icon={faMusic} className='text-2xl md:text-lg lg:text-xl' />
          </span>
          <span className='hidden md:inline md:text-base lg:text-lg font-bold'>Genre</span>
        </li>

        <li className='flex items-center md:gap-1 lg:gap-2 select-none cursor-pointer w-fit hover:text-green-light hover:text-opacity-60 duration-300'>
          <span className='flex items-center justify-center h-8 w-8'>
            <FontAwesomeIcon icon={faCompactDisc} className='text-2xl md:text-lg lg:text-xl' />
          </span>
          <span className='hidden md:inline md:text-base lg:text-lg font-bold'>Album</span>
        </li>

        <li className='flex items-center md:gap-1 lg:gap-2 select-none cursor-pointer w-fit hover:text-green-light hover:text-opacity-60 duration-300'>
          <span className='flex items-center justify-center h-8 w-8'>
            <FontAwesomeIcon icon={faMicrophone} className='text-2xl md:text-lg lg:text-xl' />
          </span>
          <span className='hidden md:inline md:text-base lg:text-lg font-bold'>Artist</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar