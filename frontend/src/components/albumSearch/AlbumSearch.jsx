import React from 'react'
import "./albumSearch.css"

const AlbumSearch = () => {
  return (
    <div className="albumSearch">
      <div className="header">
        <h2>Album</h2>
      </div>

      <div className="albumList">
        {(() => {
          const items = [];
          for (let i = 0; i < 10; i++) {
            items.push(
              <div className="item" key={i}>
                <div className="albumImg">
                  <img src="https://www.spirit-of-metal.com/les%20goupes/B/Beyond%20Creation/Algorythm/Algorythm_8172.jpg" alt="" />
                </div>
                <div className="info">
                  <h3 className='albumName' >Incurso</h3>
                  <h4 className='genre'>Album</h4>
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

export default AlbumSearch