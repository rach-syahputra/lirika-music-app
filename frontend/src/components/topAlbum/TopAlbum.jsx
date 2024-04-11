import React, { useEffect, useState } from 'react'
import "./topAlbum.css"
import axios from 'axios'

const TopAlbum = () => {
  const [topAlbums, setTopAlbums] = useState()

  useEffect(() => {
    const getTopAlbums = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/album/topAlbums")

        setTopAlbums(res.data)
      } catch (err) {
        console.log('TopAlbums: ', err.message)
      }
    }
    getTopAlbums()
  }, [])

  return (
    <div className='topAlbum'>
      <div className="header">
        <h2>Top Albums</h2>
      </div>

      <div className="albumList">
        {topAlbums && topAlbums.map(album => (
          <div className="item" key={album.albumId}>
            <div className="albumImg">
              <img src={album.image} alt="" />
            </div>
            <div className="info">
              <h3 className='albumName' >
                {album.albumName.length > 16
                  ? album.albumName.slice(0, 15) + '...'
                  : album.albumName}
              </h3>
              <h4 className='artistName'>
                {album.artistName.length > 18
                  ? album.artistName.slice(0, 15) + '...'
                  : album.artistName}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopAlbum