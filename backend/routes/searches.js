import express from "express"
import { getSearchResult, getSuggestions } from "../controllers/search.js"

const router = express.Router()

router.get('/', getSearchResult)
router.get('/suggestions', getSuggestions)

export default router