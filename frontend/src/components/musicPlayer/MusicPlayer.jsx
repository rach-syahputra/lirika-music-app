import React, { useEffect, useState } from 'react'
import "./musicPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep, faForwardStep, faPause, faPlay, faPlus, faRepeat, faShuffle, faVolumeLow } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { handleNext, handlePlay, handlePrev, handleStop } from '../../handlers/handleSong'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentSongId } from '../../redux/reducers/currentSongSlice.js'
import { setIsPlayedId } from '../../redux/reducers/isPlayedSlice.js'

const MusicPlayer = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [image, setImage] = useState("")
  const [duration, setDuration] = useState("")
  const [albumName, setAlbumName] = useState("")
  const songList = useSelector(state => state.songList.data)
  const currentSongId = useSelector(state => state.currentSongId.id)
  const isPlayedId = useSelector(state => state.isPlayedId.id)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/song/find/" + currentSongId)
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
    fetchData();
  }, [currentSongId])

  return (
    <div className='musicPlayer'>
      <div className="leftControl">
        <div className="imgContainer">
          <img src={image ? `${image}` : 'https://f4.bcbits.com/img/a4139357031_10.jpg'} alt="" />
        </div>
        <div className='songDetails'>
          <h2 className='songTitle'>{title}</h2>
          <h4 className='moreSongDetails'>{`${artist} • ${albumName} • 2008`}</h4>
        </div>
        <div className="buttonPlus">
          <FontAwesomeIcon icon={faPlus} className='icon' />
        </div>
      </div>

      <div className="middleControl">
        <div className="controlButtons">
          <div className="buttonPrev" onClick={() => handlePrev(songList, currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
            <FontAwesomeIcon icon={faBackwardStep} className='icon' />
          </div>
          {isPlayedId
            ?
            <div className="buttonPause" onClick={() => handleStop(setIsPlayedId, dispatch)}>
              <FontAwesomeIcon icon={faPause} className='icon' />
            </div>
            :
            <div className="buttonPlay" onClick={() => handlePlay(currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>
          }
          <div className="buttonNext" onClick={() => handleNext(songList, currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
            <FontAwesomeIcon icon={faForwardStep} className='icon' />
          </div>
        </div>
        <div className="durations">
          <h5>{`00.00 / ${duration}`}</h5>
        </div>
      </div>

      <div className="rightControl">
        <div className="controlButtons">
          <FontAwesomeIcon icon={faVolumeLow} className='icon' />
          <FontAwesomeIcon icon={faRepeat} className='icon' />
          <FontAwesomeIcon icon={faShuffle} className='icon' />
        </div>
      </div>
    </div >
  )
}

export default MusicPlayer