import express from "express"
import { getAllAlbumFromArtist, getTopAlbums } from "../controllers/album.js"

const router = express.Router()

router.get("/topAlbums", getTopAlbums)
router.get("/:artistId/", getAllAlbumFromArtist)

export default router