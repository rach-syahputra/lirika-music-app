import React from 'react'
import "./allSongsFromAlbum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'

const AllSongsFromAlbum = () => {
  return (
    <div className="all-songs-from-album">
      <div className="album-container">
        <div className="img-container">
          <img src="https://upload.wikimedia.org/wikipedia/id/thumb/3/3a/Mayhem_demysteriisdomsathanas.jpg/640px-Mayhem_demysteriisdomsathanas.jpg" alt="" />
        </div>

        <div className="album-info">
          <h1 className='album-name'>Dehumanization by Supremacy: The Instrumentals</h1>

          <div className="more-album-details">
            <h4 className='album-and-artist-details'>Album • Artist Name</h4>
            <h4 className='total-songs-and-duration'>10 songs • 30 minutes</h4>
          </div>

          <div className="buttons">
            <div className='play-button'>
              <FontAwesomeIcon icon={faPlay} className='icon' /> Play
            </div>
            <div className='shuffle-button'>
              <FontAwesomeIcon icon={faShuffle} className='icon' /> Shuffle
            </div>
          </div>
        </div>
      </div>

      <hr />

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

export default AllSongsFromAlbum