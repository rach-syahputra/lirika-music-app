import React, { useEffect, useState } from 'react'
import "./topArtist.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const TopArtist = () => {
  const [topArtists, setTopArtists] = useState()

  useEffect(() => {
    getTopArtists()
  }, [])

  const getTopArtists = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/artist/topArtist")

      setTopArtists(res.data)
    } catch (err) {
      console.log('TopArtist: ', err.message)
    }
  }

  return (
    <div className='topArtist'>
      <div className="header">
        <h2>Top Artists</h2>
      </div>

      <div className="artistList">
        {topArtists && topArtists.map(artist => (
          <Link to={`/artist/${artist.artistId}`} key={artist.artistId}>
            <div className="item" >
              <div className="artistImg">
                <img src={artist.image} alt="" />
              </div>
              <div className="info">
                <h3 className='artistName' >
                  {artist.artistName.length > 15
                    ? artist.artistName.slice(0, 13) + '...'
                    : artist.artistName}
                </h3>
                <h4 className='country'>{artist.country}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TopArtist