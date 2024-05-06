import React from 'react'
import "./popularArtistSongs.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import TopButtons from '../topButtons/TopButtons'

const PopularArtistSongs = () => {
  return (
    <div className='popular-artist-songs'>
      <TopButtons />
      <div className="header">
        <h2>Songs</h2>
      </div>
      <div className='song-list'>
        {(() => {
          const items = []
          for (let i = 0; i < 5; i++) {
            items.push(
              <div className="item" key={i}>
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

              </div>
            )
          }
          return items
        })()}
        <div className="see-more">
          <h4>See more</h4>
        </div>
      </div>

    </div>
  )
}

export default PopularArtistSongs