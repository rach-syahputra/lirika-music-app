import express from "express"
import { getArtistImageCoverData, getTopArtists } from "../controllers/artist.js"

const router = express.Router()

router.get('/topArtist', getTopArtists)
router.get('/:artistId/artistImageCover', getArtistImageCoverData)

export default router