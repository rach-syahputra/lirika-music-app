import express from "express"
import { getTopAlbums } from "../controllers/album.js"

const router = express.Router()

router.get("/topAlbums", getTopAlbums)

export default router