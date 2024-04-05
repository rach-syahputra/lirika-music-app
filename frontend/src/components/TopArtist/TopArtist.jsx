import React, { useEffect, useState } from 'react'
import "./topArtist.css"
import axios from 'axios'

const TopArtist = () => {
  const [topArtists, setTopArtists] = useState()

  useEffect(() => {
    const getTopArtists = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/artist/topArtist")

        setTopArtists(res.data)
      } catch (err) {
        console.log('TopArtist: ', err.message)
      }
    }
    getTopArtists()
  }, [])

  return (
    <div className='topArtist'>
      <div className="header">
        <h2>Top Artists</h2>
        <h4>See All</h4>
      </div>

      <div className="artistList">
        {topArtists && topArtists.map(artist => (
          <div className="item" key={artist.artistId}>
            <img src={artist.image} alt="" />
            <div className="info">
              <h3>{artist.artistName}</h3>
              <h4>{artist.country}</h4>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default TopArtist