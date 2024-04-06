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
      </div>

      <div className="artistList">
        {topArtists && topArtists.map(artist => (
          <div className="item" key={artist.artistId}>
            <div className="artistImg">
              <img src={artist.image} alt="" />
            </div>
            <div className="info">
              <h3 className='artistName' style={{ fontSize: artist.artistName.length > 18 && '13px' }}>{artist.artistName}</h3>
              <h4 className='country'>{artist.country}</h4>
            </div>
          </div>
        ))}

        <div className="item">
          <div className="info">
            <div className="artistImg">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/ea7f6168da2fdccd7014166aaeede714.jpg" alt="" />
            </div>
            <h3 className="artistName">Band Name</h3>
            <h4 className="country">Country</h4>
          </div>
        </div>

        <div className="item">
          <div className="info">
            <div className="artistImg">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/ea7f6168da2fdccd7014166aaeede714.jpg" alt="" />
            </div>
            <h3 className="artistName">Band Name</h3>
            <h4 className="country">Country</h4>
          </div>
        </div>

        <div className="item">
          <div className="info">
            <div className="artistImg">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/ea7f6168da2fdccd7014166aaeede714.jpg" alt="" />
            </div>
            <h3 className="artistName">Band Name</h3>
            <h4 className="country">Country</h4>
          </div>
        </div>

        <div className="item">
          <div className="info">
            <div className="artistImg">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/ea7f6168da2fdccd7014166aaeede714.jpg" alt="" />
            </div>
            <h3 className="artistName">Band Name</h3>
            <h4 className="country">Country</h4>
          </div>
        </div>

        <div className="item">
          <div className="info">
            <div className="artistImg">
              <img src="https://lastfm.freetls.fastly.net/i/u/300x300/ea7f6168da2fdccd7014166aaeede714.jpg" alt="" />
            </div>
            <h3 className="artistName">Band Name</h3>
            <h4 className="country">Country</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopArtist