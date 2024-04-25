import React from 'react'
import "./songSearch.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { truncateText } from '../../utils/truncation'

const SongSearch = ({ songs }) => {

  return (
    <div className='songSearch'>
      <div className="header">
        <h2>Songs</h2>
      </div>

      <div className="songList">
        {songs && songs.map((song) => (
          <div className="item" key={song.songId}>
            <div className="songImg">
              <img src={song.songImage} alt="" />
            </div>
            <div className="playButton">
              <FontAwesomeIcon icon={faPlay} className='icon' />
            </div>
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
  )
}

export default SongSearch