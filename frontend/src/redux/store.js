import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentSongIdReducer from "./reducers/currentSongSlice.js"
import isPlayedIdReducer from "./reducers/isPlayedSlice.js"
import songListReducer, { fetchInitialSongs } from "./reducers/songListSlice.js"
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: 'root',
  storage
}


const rootReducer = combineReducers({
  currentSongId: currentSongIdReducer,
  isPlayedId: isPlayedIdReducer,
  songList: songListReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
  reducer: persistedReducer
})

// const persistor = persistStore(store)

export default store

store.dispatch(fetchInitialSongs())