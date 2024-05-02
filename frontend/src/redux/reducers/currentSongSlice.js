import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: null
}

const currentSongSlice = createSlice({
  name: 'currentSongId',
  initialState,
  reducers: {
    setCurrentSongId: (state, action) => {
      return {
        id: action.payload
      }
    }
  }
})

export const { setCurrentSongId } = currentSongSlice.actions
export default currentSongSlice.reducer