import express from "express"
import { getSong, getSongs } from "../controllers/song.js"

const router = express.Router()

router.get('/', getSongs)
router.get('/find/:songId', getSong)

export default router