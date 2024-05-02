import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: parseInt(localStorage.getItem('isPlayedId')) || null
}

const isPlayedSlice = createSlice({
  name: 'isPlayedId',
  initialState,
  reducers: {
    setIsPlayedId: (state, action) => {
      localStorage.setItem('isPlayedId', action.payload)
      return {
        id: action.payload
      }
    }
  }
})

export const { setIsPlayedId } = isPlayedSlice.actions
export default isPlayedSlice.reducer