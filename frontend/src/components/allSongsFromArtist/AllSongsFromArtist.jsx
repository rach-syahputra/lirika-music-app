import React from 'react'
import "./allSongsFromArtist.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'

const AllSongsFromArtist = () => {
  return (
    <div className="all-songs-from-artist">
      <div className="header">
        <h2>Songs</h2>
      </div>

      <div className='song-list'>
        {(() => {
          const items = []
          for (let i = 0; i < 20; i++) {
            items.push(
              <div className="item">
                <h3 className='no'>
                  {i + 1}
                </h3>
                <div className="song-img">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvPmMxS53u0HCL9tbELW1fTr-c793tq0jfUG1SQncBw&s" alt="" />
                </div>

                <div className="pause-button">
                  <FontAwesomeIcon icon={faPause} className='icon' />
                </div>
                <div className="play-button">
                  <FontAwesomeIcon icon={faPlay} className='icon' />
                </div>


                <h3 className='song-title' >
                  Song Title
                </h3>

                <h4 className='artist-name'>
                  Artist Name
                </h4>

                <h4 className='played-count'>
                  100k Plays
                </h4>

                <h4 className='album-name'>
                  Album Name
                </h4>

                <h4 className='duration'>
                  5.00
                </h4>

              </div>
            )
          }
          return items
        })()}
      </div>
    </div>
  )
}

export default AllSongsFromArtist