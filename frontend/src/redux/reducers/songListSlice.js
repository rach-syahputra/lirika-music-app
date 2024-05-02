import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { setCurrentSongId } from "./currentSongSlice"
import { setIsPlayedId } from "./isPlayedSlice"

const initialState = {
  data: null,
  loading: false,
  error: null
}

export const fetchTopSongs = createAsyncThunk(
  'songs/fetchTopSongs',
  async ({ }, thunkAPI) => {
    try {
      const res = await axios.get('http://localhost:8800/api/song/topSong')
      const topSong = res.data
      const currentSongId = thunkAPI.getState().currentSongId.id

      // if there is no currentSongId or the user just logged in
      if (topSong.length > 0 && !currentSongId) {
        thunkAPI.dispatch(setCurrentSongId(topSong[0].songId))
      }
      return topSong
    } catch (error) {
      console.log('fetchTopSongs error', error.message)
    }

  }
)

export const fetchArtistSongs = createAsyncThunk(
  'songs/fetchArtistSongs',
  async ({ artistId, songId }, { dispatch }) => {
    try {
      const res = await axios.get(`http://localhost:8800/api/song/artist/${artistId}/songs`)
      const artistSongs = res.data

      if (artistSongs.length > 0) {
        // if songId is not defined then
        // first songId of song list from artistSongs value is assigned to songId
        songId = songId || artistSongs[0].songId
        dispatch(setCurrentSongId(songId))
        dispatch(setIsPlayedId(songId))
      }

      return artistSongs
    } catch (error) {
      console.log('fetchArtistSongs error', error.message)
      throw error
    }
  }
)

export const fetchAlbumSongs = createAsyncThunk(
  'songs/fetchAlbumSongs',
  async (albumId) => {
    try {
      const res = await axios.get(`http://localhost:8800/api/song/album/${albumId}/songs`)
      return res.data
    } catch (error) {
      console.log('fetchArtistSongs error', error.message)
    }
  }
)

const songListSlice = createSlice({
  name: 'songList',
  initialState,
  reducers: {
    setSongList: (state, action) => {
      return {
        data: action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
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