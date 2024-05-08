import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { setCurrentSongId } from "./currentSongSlice"
import { setIsPlayedId } from "./isPlayedSlice"

const initialState = {
  // songList data
  data: null,
  loading: false,
  error: null
}

// FETCH INITIAL SONGS
export const fetchInitialSongs = createAsyncThunk(
  'songs/fetchInitialSongs',
  async (arg, thunkAPI) => {
    try {
      const songIdList = localStorage.getItem('songIdList')
      const res = await axios.get(`http://localhost:8800/api/song/find/songs/${songIdList}`)
      const songs = res.data

      if (songs.length > 0) {
        thunkAPI.dispatch(setSongList(songs))
      }

      // store songIds to local storage
      const songIds = songs.map(song => song.songId)
      localStorage.setItem('songIdList', songIds)

      return songs
    } catch (error) {
      console.log('fetchInitialSongs error', error.message)
      throw error
    }
  }
)

// FETCH TOP SONGS
export const fetchTopSongs = createAsyncThunk(
  'songs/fetchTopSongs',
  async (arg, thunkAPI) => {
    try {
      const res = await axios.get('http://localhost:8800/api/song/topSongs')
      const topSong = res.data
      const currentSongId = thunkAPI.getState().currentSongId.id

      // if there is no currentSongId or the user just logged in
      if (topSong.length > 0 && !currentSongId) {
        thunkAPI.dispatch(setCurrentSongId(topSong[0].songId))
      }

      // store songIds to local storage
      const songIds = topSong.map(song => song.songId)
      localStorage.setItem('songIdList', songIds)

      return topSong
    } catch (error) {
      console.log('fetchTopSongs error', error.message)
      throw error
    }
  }
)

// FETCH ALL SONGS FROM ARTIST
export const fetchArtistSongs = createAsyncThunk(
  'songs/fetchArtistSongs',
  async ({ artistId, songId }, { dispatch }) => {
    try {
      // get all songs from artist API
      const res = await axios.get(`http://localhost:8800/api/song/artist/${artistId}/songs`)
      const artistSongs = res.data

      if (artistSongs.length > 0) {
        // if songId is not defined then
        // first songId of song list from artistSongs value is assigned to songId
        const newSongId = songId || artistSongs[0].songId

        // set the playback
        await dispatch(setCurrentSongId(newSongId))
        await dispatch(setIsPlayedId(newSongId))

        // store songIds to local storage
        const songIds = artistSongs.map(song => song.songId)
        localStorage.setItem('songIdList', songIds)
      }

      return artistSongs
    } catch (error) {
      console.log('fetchArtistSongs error', error.message)
      throw error
    }
  }
)

// FETCH ALL SONGS FROM ALBUM
export const fetchAlbumSongs = createAsyncThunk(
  'songs/fetchAlbumSongs',
  async ({ albumId, songId }, { dispatch }) => {
    try {
      const res = await axios.get(`http://localhost:8800/api/song/album/${albumId}/songs`)
      const albumSongs = res.data

      if (albumSongs.length > 0) {
        // if songId is not defined then
        // first songId of song list from artistSongs value is assigned to songId
        const newSongId = songId || albumSongs[0].songId

        // set the playback
        await dispatch(setCurrentSongId(newSongId))
        await dispatch(setIsPlayedId(newSongId))


        // store songIds to local storage
        const songIds = albumSongs.map(song => song.songId)
        localStorage.setItem('songIdList', songIds)
      }

      return albumSongs
    } catch (error) {
      console.log('fetchAlbumSongs error', error.message)
    }
  }
)

const songListSlice = createSlice({
  name: 'songList',
  initialState,
  reducers: {
    setSongList: (state, action) => {
      // store songIds to local storage
      const songs = action.payload
      const songIds = songs.map(song => song.songId)
      localStorage.setItem('songIdList', songIds)

      return {
        data: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // FETCH INITIAL SONGS
      .addCase(fetchInitialSongs.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      // FETCH TOP SONGS
      .addCase(fetchTopSongs.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTopSongs.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchTopSongs.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // FETCH ARTIST SONGS
      .addCase(fetchArtistSongs.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchArtistSongs.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchArtistSongs.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      // FETCH ALBUM SONGS
      .addCase(fetchAlbumSongs.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchAlbumSongs.fulfilled, (state, action) => {
        state.data = action.payload
        state.loading = false
      })
      .addCase(fetchAlbumSongs.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { setSongList } = songListSlice.actions
export default songListSlice.reducer