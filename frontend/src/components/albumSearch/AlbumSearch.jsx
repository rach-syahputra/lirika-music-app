import React from 'react'
import "./albumSearch.css"
import { truncateText } from '../../utils/truncation'

const AlbumSearch = ({ albums }) => {
  return (
    <div className="albumSearch">
      <div className="header">
        <h2>Album</h2>
      </div>

      <div className="albumList">
        {albums && albums.map(album => (
          <div className="item" key={album.albumId}>
            <div className="albumImg">
              <img src={album.albumImage} alt="" />
            </div>
            <div className="info">
              <h3 className='albumName' >
                {truncateText(album.albumName, 17)}
              </h3>
              <h4 className='type'>Album</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlbumSearch