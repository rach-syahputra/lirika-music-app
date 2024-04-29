import express from "express"
import { getSong, getSongs, getTopSongFromAlbum, getTopSongFromArtist, getTopSongs } from "../controllers/song.js"

const router = express.Router()

router.get('/', getSongs)
router.get('/find/:songId', getSong)
router.get('/topSongs', getTopSongs)
router.get('/find/topSongFromArtist/:artistId', getTopSongFromArtist)
router.get('/find/topSongFromAlbum/:albumId', getTopSongFromAlbum)

export default router