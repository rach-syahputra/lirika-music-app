import express from "express"
import { getSong, getSongs, getTopSongs } from "../controllers/song.js"

const router = express.Router()

router.get('/', getSongs)
router.get('/find/:songId', getSong)
router.get('/topSongs', getTopSongs)

export default router