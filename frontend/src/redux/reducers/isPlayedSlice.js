import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: null
}

const isPlayedSlice = createSlice({
  name: 'isPlayedId',
  initialState,
  reducers: {
    setIsPlayedId: (state, action) => {
      return {
        id: action.payload
      }
    }
  }
})

export const { setIsPlayedId } = isPlayedSlice.actions
export default isPlayedSlice.reducer