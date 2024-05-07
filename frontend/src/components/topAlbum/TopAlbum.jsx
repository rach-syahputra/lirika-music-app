import React, { useEffect, useState } from 'react'
import "./topAlbum.css"
import axios from 'axios'
import { truncateText } from "../../utils/truncation.js"
import { Link } from 'react-router-dom'

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
          <Link to={`/album/${album.albumId}/songs`} key={album.albumId}>
            <div className="item">
              <div className="albumImg">
                <img src={album.image} alt="" />
              </div>
              <div className="info">
                <h3 className='albumName' >
                  {truncateText(album.albumName, 17)}
                </h3>
                <Link to={`/artist/${album.artistId}`}>
                  <h4 className='artistName'>
                    {truncateText(album.artistName, 18)}
                  </h4>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TopAlbum