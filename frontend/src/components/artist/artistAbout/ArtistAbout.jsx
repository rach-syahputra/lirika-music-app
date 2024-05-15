import React from 'react'
import './artistAbout.css'

const ArtistAbout = () => {
  return (
    <div className='component-wrapper'>
      <div className='flex mb-4'>
        <span className='text-xl md:text-2xl font-bold'>About</span>
      </div>
      <div className='flex relative w-[800px] h-[500px] items-center justify-center rounded-sm duration-300 ease-in-out overflow-hidden hover:scale-[1.01]'>
        <img
          src='https://heavymusichq.com/wp-content/uploads/2021/07/Mayhem.jpg'
          className='w-full h-full'
        />
        <div className='absolute w-full h-full bg-dark bg-opacity-30'></div>
        <div className='absolute left-4 bottom-4 text-base'>
          <p>Mayhem is a Norwegian black metal band formed in Langhus in 1984. They were one of the founders of the Norwegian black metal scene and their music has strongly influenced the black metal genre. The group released a demo and an EP that were highly influential, and ...</p>
        </div>
      </div>

    </div>
  )
}

export default ArtistAbout