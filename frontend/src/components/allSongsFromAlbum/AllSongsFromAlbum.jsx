import React, { useEffect, useState } from 'react'
// import './allSongsFromAlbum.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faShuffle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { handlePlay, handleStop } from '../../handlers/handleSong'
import { setSongList } from '../../redux/reducers/songListSlice'
import { setCurrentSongId } from '../../redux/reducers/currentSongSlice'
import { setIsPlayedId } from '../../redux/reducers/isPlayedSlice'

const AllSongsFromAlbum = () => {
  const { albumId } = useParams()
  const [songs, setSongs] = useState([])
  const [image, setImage] = useState('')
  const [albumName, setAlbumName] = useState('')
  const [artistName, setArtistName] = useState('')
  const [firstSongId, setFirstSongId] = useState(null)
  const isPlayedId = useSelector((state) => state.isPlayedId.id)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo({ top: 0 })
    getAllSongsFromAlbum()
  }, [])

  const getAllSongsFromAlbum = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/api/song/album/${albumId}/songs`)

      const data = res.data
      setSongs(data)
      setImage(data[0].image)
      setAlbumName(data[0].albumName)
      setArtistName(data[0].artistName)
      setFirstSongId(data[0].songId)
    } catch (error) {
      console.log('PopularArtistSongs Error', error.message)
    }
  }

  const handlePlayButton = (songId) => {
    dispatch(setSongList(songs))
    handlePlay(songId, setCurrentSongId, setIsPlayedId, dispatch)
  }

  return (
    // wrapper
    <div className='component-wrapper'>
      {songs && (
        <div>
          {/* album container */}
          <div className='flex items-center gap-6 w-full overflow-hidden mb-8'>
            {/* image container */}
            <div className='flex shrink-0 h-[240px] w-[240px] overflow-hidden rounded-md'>
              <img src={image} alt='' />
            </div>

            {/* album info */}
            <div className='flex flex-col gap-4'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold max-w-[600px] h-[70px] md:h-[75px] lg:h-[80px]'>{albumName}</h1>

              <div className='flex flex-col'>
                <h4 className='text-base lg:text-lg'>{`Album • ${artistName}`}</h4>
                <h4 className='text-base lg:text-lg'>10 songs • 30 minutes</h4>
              </div>

              <div className='flex gap-4'>
                <div className='light-button' onClick={() => handlePlayButton(firstSongId)}>
                  <FontAwesomeIcon icon={faPlay} className='icon' /> Play
                </div>
                <div className='light-button'>
                  <FontAwesomeIcon icon={faShuffle} className='icon' /> Shuffle
                </div>
              </div>
            </div>
          </div>

          <hr className='border border-gray text-gray opacity-40' />

          {/* song list */}
          <ul className='flex flex-col mt-4 '>
            {songs.map((song, index) => (
              <li className='flex h-12 items-center group' key={song.songId}>

                <div className='flex relative items-center justify-center shrink-0 w-5 lg:w-7 mr-3 '>
                  <h3 className='flex group-hover:hidden justify-center w-full h-full text-base lg:text-lg text-gray'>
                    {isPlayedId !== song.songId && (
                      `${index + 1}`
                    )}
                  </h3>

                  {isPlayedId === song.songId
                    ?
                    <div className='absolute items-center justify-center bg-dark bg-opacity-40 flex w-8 h-8 cursor-pointer' onClick={() => handleStop(setIsPlayedId, dispatch)}>
                      <FontAwesomeIcon icon={faPause} className='icon' />
                    </div>
                    :
                    <div className='hidden absolute group-hover:flex items-center justify-center bg-dark bg-opacity-40 w-8 h-8 cursor-pointer' onClick={() => handlePlayButton(song.songId)}>
                      <FontAwesomeIcon icon={faPlay} className='icon' />
                    </div>
                  }
                </div>

                <h3 className='flex-grow-2 shrink-0 basis-[300px] text-base lg:text-lg font-bold' >
                  {song.title}
                </h3>

                <h4 className='flex-grow basis-[250px] pr-2 text-sm lg:text-base'>
                  {song.artistName}
                </h4>

                <h4 className='flex justify-end md:justify-start basis-[250px] pr-2 text-sm lg:text-base'>
                  {`${song.playedCount} Plays`}
                </h4>

                <h4 className='hidden md:flex basis-[100px] pr-2 justify-end text-sm lg:text-base'>
                  {song.duration}
                </h4>

              </li>
            ))}

          </ul>
        </div>
      )}
    </div>
  )
}

export default AllSongsFromAlbum