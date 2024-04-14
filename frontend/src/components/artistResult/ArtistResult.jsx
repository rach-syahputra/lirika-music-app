import React from 'react'
import "./artistResult.css"

const ArtistResult = () => {
  return (
    <div className="artistResult">
      <div className="header">
        <h2>Artist</h2>
      </div>

      <div className="artistList">
        {(() => {
          const items = [];
          for (let i = 0; i < 10; i++) {
            items.push(
              <div className="item" key={i}>
                <div className="artistImg">
                  <img src="https://lastfm.freetls.fastly.net/i/u/300x300/ea7f6168da2fdccd7014166aaeede714.jpg" alt="" />
                </div>
                <div className="info">
                  <h3 className='artistName' >Shadow Of Hunger</h3>
                  <h4 className='country'>Artist</h4>
                </div>
              </div>
            );
          }
          return items;
        })()}
      </div>
    </div>
  )
}

export default ArtistResult