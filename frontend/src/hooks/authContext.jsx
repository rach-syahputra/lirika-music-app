import { createContext, useEffect, useState } from "react"
import axios from "axios"

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const login = async (email, password) => {
    const res = await axios.post("http://localhost:8800/api/auth/login", { email, password }, {
      withCredentials: true
    })

    setCurrentUser(res.data)
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
};