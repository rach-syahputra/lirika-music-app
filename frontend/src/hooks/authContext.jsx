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

  // check token validation
  const checkAuth = async () => {
    try {
      const res = await axios.get('http://localhost:8800/api/auth/check-auth', {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })

      console.log(res.data.authenticated);

      // return true
      return res.data.authenticated

    } catch (err) {
      console.log('CheckAuth err: ', err.response.data)
      // return false
    }
  }

  const isAuthenticated = async () => {
    // do token authentication and check currentUser existence
    // coerse the checkAuth and currentUser to be boolean
    const authenticated = await checkAuth()
    return !!authenticated && !!currentUser
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{ currentUser, login, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
};