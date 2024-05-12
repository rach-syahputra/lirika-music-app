import React, { useEffect, useState } from 'react'
import "./artistAlbums.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { fetchAlbumSongs } from '../../../redux/reducers/songListSlice'

const ArtistAlbums = () => {
  const { artistId } = useParams()
  const [albums, setAlbums] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    getAllAlbumFromArtist()
  }, [])

  const getAllAlbumFromArtist = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/album/${artistId}`)

      const data = res.data
      setAlbums(data)
    } catch (error) {
      console.log('ArtistAlbums Error', error.message)
    }
  }

  const handlePlayButton = async (albumId) => {
    await dispatch(fetchAlbumSongs({ albumId })).unwrap()
    navigate(`/album/${albumId}/songs`)
  }

  return (
    <div className='artist-albums'>
      <div className="header">
        <h2>Albums</h2>
      </div>

      <div className="album-list">
        {albums && albums.map((album) => (
          <div className="item" key={album.albumId}>
            <div
              className="album-img"
            >
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
              <h3 className='album-name' >{album.albumName}</h3>
              <h4 className='releaseYear-type'>2017 • Album</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="show-all">
        <h4>Show all</h4>
      </div>
    </div>
  )
}

export default ArtistAlbums