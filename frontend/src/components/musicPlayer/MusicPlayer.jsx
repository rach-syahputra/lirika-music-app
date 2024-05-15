import React, { useEffect, useState } from 'react'
import './musicPlayer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faForwardStep, faPause, faPlay, faPlus, faRepeat, faShuffle, faVolumeLow } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { handleNext, handlePlay, handlePrev, handleStop } from '../../handlers/handleSong'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSongId } from '../../redux/reducers/currentSongSlice.js'
import { setIsPlayedId } from '../../redux/reducers/isPlayedSlice.js'

const MusicPlayer = () => {
  const [title, setTitle] = useState('')
  const [artist, setArtist] = useState('')
  const [image, setImage] = useState('')
  const [duration, setDuration] = useState('')
  const [albumName, setAlbumName] = useState('')
  const songList = useSelector(state => state.songList.data)
  const currentSongId = useSelector(state => state.currentSongId.id)
  const isPlayedId = useSelector(state => state.isPlayedId.id)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchData();
  }, [currentSongId, isPlayedId])

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:8800/api/song/find/' + currentSongId)
      const song = res.data

      setTitle(song.title)
      setArtist(song.artist)
      setImage(song.image)
      setDuration(song.duration)
      setAlbumName(song.albumName)

    } catch (error) {
      console.log('MusicPlayer Error: ', error)
    }
  }

  return (
    // wrapper
    <div className='fixed flex h-[75px] items-center w-full bottom-0 left-0 bg-dark z-20'>
      <div className='flex items-center h-full pl-3 gap-3 flex-1'>
        <div className='w-[38px] h-[38px] lg:w-[45px] lg:h-[45px]'>
          <img src={image ? `${image}` : 'https://f4.bcbits.com/img/a4139357031_10.jpg'} alt='' className='w-full h-full' />
        </div>
        <div className='flex flex-col'>
          <h2 className='text-sm lg:text-base text-nowrap'>{title}</h2>
          <h4 className='text-sm lg:text-base text-nowrap'>{`${artist} • ${albumName}`}</h4>
        </div>
        <div className='hidden md:flex items-center justify-center p-1 xl:p-[6px] border-2 rounded-full border-gray cursor-pointer'>
          <FontAwesomeIcon icon={faPlus} className='text-sm lg:text-base' />
        </div>
      </div>

      <div className='flex flex-col items-center justify-center h-full gap-2 flex-1'>
        <div className='flex items-center justify-center gap-6'>
          <div className='h-6 w-6 flex items-center justify-center cursor-pointer' onClick={() => handlePrev(songList, currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
            <FontAwesomeIcon icon={faBackwardStep} className='text-xl md:text-2xl' />
          </div>
          {isPlayedId
            ?
            <div className='h-6 w-6 flex items-center justify-center cursor-pointer' onClick={() => handleStop(setIsPlayedId, dispatch)}>
              <FontAwesomeIcon icon={faPause} className='text-[25px] md:text-[28px]' />
            </div>
            :
            <div className='h-6 w-6 flex items-center justify-center cursor-pointer' onClick={() => handlePlay(currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
              <FontAwesomeIcon icon={faPlay} className='text-xl md:text-2xl' />
            </div>
          }
          <div className='h-6 w-6 flex items-center justify-center cursor-pointer' onClick={() => handleNext(songList, currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
            <FontAwesomeIcon icon={faForwardStep} className='text-xl md:text-2xl' />
          </div>
        </div>
        <div className='flex items-center justify-center px-2'>
          <h5 className='text-xs text-gray'>{`00.00 / ${duration}`}</h5>
        </div>
      </div>

      <div className='flex items-center justify-end h-full pr-3 flex-1'>
        <div className='flex gap-6'>
          <FontAwesomeIcon icon={faVolumeLow} className='text-xl' />
          <FontAwesomeIcon icon={faRepeat} className='text-xl' />
          <FontAwesomeIcon icon={faShuffle} className='text-xl' />
        </div>
      </div>
    </div >
  )
}

export default MusicPlayer