import express from "express";
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import songRoute from "./routes/songs.js"
import artistRoute from "./routes/artists.js"
import albumRoute from "./routes/albums.js"
import searchRoute from "./routes/searches.js"
import cors from "cors"
import cookieParser from "cookie-parser";
import createConnection from "./connect.js";

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

// ROUTES
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/song", songRoute)
app.use("/api/song", songRoute)
app.use("/api/artist", artistRoute)
app.use("/api/album", albumRoute)
app.use("/api/search", searchRoute)

// DATABASE CONNECTION CHECKING
createConnection()
  .then(() => {
    app.listen(8800, () => {
      console.log("Server is working!");
    })
  })
  .catch((err) => {
    console.error('MySQL connection error')
  })