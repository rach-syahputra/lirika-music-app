import React, { useEffect } from 'react'
import "./songSearch.css"
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

    handlePlay(songId, dispatch, setCurrentSongId, setIsPlayedId)
  }

  return (
    <div className='songSearch'>
      <div className="header">
        <h2>Songs</h2>
      </div>
      <div className='songList'>
        {/* conditionally set display grid based on length of songs */}
        <div className={`${songs.length <= 6 ? 'small' : 'large'}`}>
          {songs && songs.map((song) => (
            <div className="item" key={song.songId}>
              <div className="songImg">
                <img src={song.albumImage} alt="" />
              </div>
              {isPlayedId === song.songId
                ?
                <div className="pauseButton" onClick={() => handleStop(dispatch, setIsPlayedId)}>
                  <FontAwesomeIcon icon={faPause} className='icon' />
                </div>
                :
                <div className="playButton" onClick={() => handlePlayButton(song.songId)}>
                  <FontAwesomeIcon icon={faPlay} className='icon' />
                </div>
              }
              <div className="info">
                <h3 className='songTitle' >
                  {truncateText(song.songTitle, 35)}
                </h3>
                <div className="artistAndAlbumInfo">
                  <h4>
                    {truncateText(`${song.artistName} • ${song.albumName}`, 47)}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SongSearch