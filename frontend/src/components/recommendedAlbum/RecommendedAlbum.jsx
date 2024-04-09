import React from 'react'
import "./recommendedAlbum.css"

const RecommendedAlbum = () => {
  return (
    <div className='recommendedAlbum'>
      <div className="header">
        <h2>Recommended Albums</h2>
      </div>

      <div className="albumList">
        {(() => {
          const items = [];
          for (let i = 0; i < 20; i++) {
            items.push(
              <div className="item" key={i}>
                <div className="albumImg">
                  <img src="https://www.spirit-of-metal.com/les%20goupes/B/Beyond%20Creation/Algorythm/Algorythm_8172.jpg" alt="" />
                </div>
                <div className="info">
                  <h3 className='albumName' >Shadow Of Hunger</h3>
                  <h4 className='artistName'>Nordjevel</h4>
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

export default RecommendedAlbum