import express from "express"
import { getAllSongFromAlbum, getAllSongFromArtist, getSong, getSongs, getTopSongFromAlbum, getTopSongFromArtist, getTopSongs } from "../controllers/song.js"

const router = express.Router()

router.get('/', getSongs)
router.get('/find/:songId', getSong)
router.get('/topSongs', getTopSongs)
router.get('/artist/:artistId/songs', getAllSongFromArtist)
router.get('/album/:albumId/songs', getAllSongFromAlbum)
router.get('/find/topSongFromArtist/:artistId', getTopSongFromArtist)
router.get('/find/topSongFromAlbum/:albumId', getTopSongFromAlbum)

export default router