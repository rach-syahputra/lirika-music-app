import { configureStore } from "@reduxjs/toolkit";
import currentSongIdReducer from "./reducers/currentSongSlice.js"
import isPlayedIdReducer from "./reducers/isPlayedSlice.js"
import songListReducer from "./reducers/songListSlice.js"

const store = configureStore({
  reducer: {
    currentSongId: currentSongIdReducer,
    isPlayedId: isPlayedIdReducer,
    songList: songListReducer
  }
})

export default store