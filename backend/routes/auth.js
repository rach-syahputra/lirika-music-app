import express from "express";
import { emailAvailabilityCheck, login, register, logout, authenticateToken } from "../controllers/auth.js";

const router = express.Router()

router.post("/emailAvailabilityCheck", emailAvailabilityCheck)
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.get("/check-auth", authenticateToken, (req, res) => {
  // const token = res.locals.accessToken
  res.status(200).json({
    authenticated: true
  })
})

export default router