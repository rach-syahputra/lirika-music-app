import React, { useEffect, useState } from 'react'
// import './songSearch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { truncateText } from '../../../utils/truncation.js'
import { handlePlay, handleStop } from '../../../handlers/handleSong.js'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSongId } from '../../../redux/reducers/currentSongSlice.js'
import { setIsPlayedId } from '../../../redux/reducers/isPlayedSlice.js'
import { setSongList } from '../../../redux/reducers/songListSlice.js'


const SongSearch = ({ songs }) => {
  const isPlayedId = useSelector(state => state.isPlayedId.id)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('SONGS DATA FROM SEARCH', songs)
  }, [songs])

  const handlePlayButton = (songId) => {
    dispatch(setSongList(songs))

    // store songIds to local storage
    const songIds = songs.map(song => song.songId)
    localStorage.setItem('songIdList', songIds)

    handlePlay(songId, setCurrentSongId, setIsPlayedId, dispatch)
  }

  return (
    <div className='component-wrapper'>
      <div className='component-header'>
        <span className='header'>Songs</span>
      </div>

      {/* SONG LIST */}
      {/* conditionally set display grid based on length of songs */}
      <ul
        className={`${songs.length <= 6
          ? 'grid grid-rows-[repeat(3,minmax(0,1fr))] grid-flow-col' // for less than 6 data, displaying maximum 3 rows of data for large screen (min-width 1280px)
          : 'grid grid-cols-1 md:grid-cols-none  md:grid-rows-[repeat(10,minmax(0,1fr))] xl:grid-rows-[repeat(6,minmax(0,1fr))] grid-flow-row md:grid-flow-col'}`} // for more than 6 data, displaying maximum 6 rows of data for large screen (min-width 1280px)
      >
        {songs && songs.map((song) => (
          <li className='flex flex-1 items-center pr-2 h-[60px] md:h-[50px] lg:h-[60px] xl:h-[70px] max-w-[400px] group' key={song.songId}>
            {/* image container */}
            <div className='relative flex shrink-0 h-9 lg:h-10 xl:h-11 w-12 lg:w-13 xl:w-14'>
              <img
                src={song.albumImage}
                alt=''
                className='h-9 w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11'
              />
            </div>
            {isPlayedId === song.songId
              ?
              <div
                className='absolute flex items-center justify-center h-9 w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 rounded-md bg-gray-dark bg-opacity-80 cursor-pointer'
                onClick={() => handleStop(setIsPlayedId, dispatch)}
              >
                <FontAwesomeIcon icon={faPause} />
              </div>
              :
              <div
                className='hidden absolute group-hover:flex items-center justify-center h-9 w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 rounded-md bg-gray-dark bg-opacity-80 cursor-pointer'
                onClick={() => handlePlayButton(song.songId)}
              >
                <FontAwesomeIcon icon={faPlay} />
              </div>
            }
            <div className='flex flex-col'>
              <span className='text-sm xl:text-base font-bold' >
                {truncateText(song.songTitle, 35)}
              </span>
              <span className='text-sm text-gray'>
                {truncateText(`${song.artistName} • ${song.albumName}`, 35)}
              </span>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default SongSearch