import { connection } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const emailAvailabilityCheck = async (req, res) => {
  try {
    //CHECK IF EMAIL EXIST
    const query = "SELECT COUNT(*) AS count FROM users WHERE email = ?"
    const [checkEmail] = await connection.execute(query, [req.body.email])

    if (checkEmail[0].count > 0) return res.status(400).json({ message: 'Email already exists' })

    res.status(200).json({ message: 'Email is available' })
  } catch (err) {
    res.status(500).json({ message: 'Failed to check availability' })
  }
}

export const register = async (req, res) => {
  // Hash the password
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt)

  // CREATE A NEW USER
  try {
    const values = [
      req.body.email,
      hashedPassword,
      req.body.name,
      req.body.gender,
      req.body.role
    ]
    const query = "INSERT INTO users (`email`,`password`,`name`,`gender`,`role`) VALUES (?,?,?,?,?)"
    const [addUser] = await connection.execute(query, values)

    res.status(201).json({ message: 'User has been added successfully' })
  } catch (err) {
    res.status(500).json({ message: 'Register failed' })
  }
}

export const login = async (req, res) => {
  try {
    const query = "SELECT * FROM users WHERE email = ?"
    const [login] = await connection.execute(query, [req.body.email])

    if (login.length === 0)
      return res.status(404).json({ message: 'User not found' })

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      login[0].password
    )
    if (!checkPassword)
      return res.status(400).json({ message: 'Wrong email or password!' })

    const token = jwt.sign({
      userId: login[0].userId
    }, "secretkey")

    const { password, ...others } = login[0]

    res.cookie("accessToken", token, { httpOnly: true }).status(200).json(others)
  } catch (err) {
    res.status(500).json({ message: 'Login failed' })
  }

}

export const logout = (req, res) => {
  res.clearCookie("accessToken")
  res.status(200).json("User has been logged out.")
}

// Middleware to check authentication
export const authenticateToken = (req, res, next) => {
  const token = req.cookies.accessToken

  if (!token) {
    return res.status(401).json({
      authenticated: false
    })
  }

  jwt.verify(token, "secretkey", (err) => {
    if (err) {
      return res.status(401).json({
        authenticated: false
      })
    }
    // if token is valid. send it back in the response
    // res.locals.accessToken = token
    next()
  })
}