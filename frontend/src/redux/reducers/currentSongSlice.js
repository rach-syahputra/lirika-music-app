import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: parseInt(localStorage.getItem('currentSongId')) || null
}

const currentSongSlice = createSlice({
  name: 'currentSongId',
  initialState,
  reducers: {
    setCurrentSongId: (state, action) => {
      localStorage.setItem('currentSongId', action.payload)
      return {
        id: action.payload
      }
    }
  }
})

export const { setCurrentSongId } = currentSongSlice.actions
export default currentSongSlice.reducer