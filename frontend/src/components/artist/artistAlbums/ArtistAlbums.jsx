import React from 'react'
import "./artistAlbums.css"

const ArtistAlbums = () => {
  return (
    <div className='artist-albums'>
      <div className="header">
        <h2>Albums</h2>
      </div>

      <div className="album-list">
        {(() => {
          const items = [];
          for (let i = 0; i < 20; i++) {
            items.push(
              <div className="item" key={i}>
                <div className="album-img">
                  <img src="https://www.spirit-of-metal.com/les%20goupes/B/Beyond%20Creation/Algorythm/Algorythm_8172.jpg" alt="" />
                </div>
                <div className="info">
                  <h3 className='album-name' >Shadow Of Hunger</h3>
                  <h4 className='releaseYear-type'>2017 • Album</h4>
                </div>
              </div>
            );
          }
          return items;
        })()}
      </div>
      <div className="show-all">
        <h4>Show all</h4>
      </div>
    </div>
  )
}

export default ArtistAlbums