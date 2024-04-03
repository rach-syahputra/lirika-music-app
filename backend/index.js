import express from "express";
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import songRoute from "./routes/songs.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import { connection } from "./connect.js";

const app = express()

// MIDDLEWARES
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true)
  next()
})
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  credentials: 'same-origin'
}))
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/song", songRoute)

app.listen(8800, () => {
  console.log("Server is working!");
})

console.log('fuck')