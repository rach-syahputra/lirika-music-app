import express from "express";
import userRoute from "./routes/users.js"
import authRoute from "./routes/auth.js"

const app = express()

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen(8800, () => {
  console.log("Server is working!");
})