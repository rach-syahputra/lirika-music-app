import React, { useEffect, useState } from 'react'
import "./topAlbum.css"
import axios from 'axios'
import { truncateText } from "../../utils/truncation.js"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbumSongs } from '../../redux/reducers/songListSlice.js'

const TopAlbum = () => {
  const [topAlbums, setTopAlbums] = useState()
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const handlePlayButton = async (albumId) => {
    await dispatch(fetchAlbumSongs({ albumId })).unwrap()
    navigate(`/album/${albumId}/songs`)
  }

  return (
    <div className='top-album'>
      <div className="header">
        <h2>Top Albums</h2>
      </div>

      <div className="album-list">
        {topAlbums && topAlbums.map(album => (
          <div className="item" key={album.albumId}>
            <div className="album-img">
              <img
                src={album.image}
                alt=""
                onClick={() => navigate(`/album/${album.albumId}/songs`)}
              />
              <div
                className="play-button"
                onClick={() => (handlePlayButton(album.albumId))}
              >
                <FontAwesomeIcon icon={faPlay} className='icon' />
              </div>
            </div>
            <div className="info">
              <h3 className='album-name' >
                {truncateText(album.albumName, 18)}
              </h3>

              <h4
                className='artist-name'
                onClick={() => handleNavigate(`/artist/${album.artistId}`)}
              >
                {truncateText(album.artistName, 18)}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopAlbum