import express from "express"
import { getTopArtists } from "../controllers/artist.js"

const router = express.Router()

router.get('/topArtist', getTopArtists)

export default router