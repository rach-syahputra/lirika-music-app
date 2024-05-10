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
    fetchData();
  }, [currentSongId, isPlayedId])

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

  return (

    <div className='music-player'>
      <div className="left-control">
        <div className="img-container">
          <img src={image ? `${image}` : 'https://f4.bcbits.com/img/a4139357031_10.jpg'} alt="" />
        </div>
        <div className='song-details'>
          <h2 className='song-title'>{title}</h2>
          <h4 className='more-song-details'>{`${artist} • ${albumName} • 2008`}</h4>
        </div>
        <div className="plus-button">
          <FontAwesomeIcon icon={faPlus} className='icon' />
        </div>
      </div>

      <div className="middle-control">
        <div className="control-buttons">
          <div className="prev-button" onClick={() => handlePrev(songList, currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
            <FontAwesomeIcon icon={faBackwardStep} className='icon' />
          </div>
          {isPlayedId
            ?
            <div className="pause-button" onClick={() => handleStop(setIsPlayedId, dispatch)}>
              <FontAwesomeIcon icon={faPause} className='icon' />
            </div>
            :
            <div className="play-button" onClick={() => handlePlay(currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>
          }
          <div className="next-button" onClick={() => handleNext(songList, currentSongId, setCurrentSongId, setIsPlayedId, dispatch)}>
            <FontAwesomeIcon icon={faForwardStep} className='icon' />
          </div>
        </div>
        <div className="durations">
          <h5>{`00.00 / ${duration}`}</h5>
        </div>
      </div>

      <div className="right-control">
        <div className="control-buttons">
          <FontAwesomeIcon icon={faVolumeLow} className='icon' />
          <FontAwesomeIcon icon={faRepeat} className='icon' />
          <FontAwesomeIcon icon={faShuffle} className='icon' />
        </div>
      </div>
    </div >
  )
}

export default MusicPlayer