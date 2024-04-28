import React from 'react'
import "./songSearch.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { truncateText } from '../../utils/truncation'
import { handlePlay } from '../../handlers/handleSong'

const SongSearch = ({ songs }) => {

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
              <div className="playButton" onClick={() => handlePlay}>
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
    </div>
  )
}

export default SongSearch