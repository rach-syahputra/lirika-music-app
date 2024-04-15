import express from "express"
import { getSearchResult } from "../controllers/search.js"

const router = express.Router()

router.get('/', getSearchResult)

export default router