import express from "express";
import { emailAvailabilityCheck, login, register, logout } from "../controllers/auth.js";

const router = express.Router()

router.post("/emailAvailabilityCheck", emailAvailabilityCheck)
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router