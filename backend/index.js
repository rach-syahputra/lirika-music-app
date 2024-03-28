import express from "express";
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

// MIDDLEWARES
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen(8800, () => {
  console.log("Server is working!");
})