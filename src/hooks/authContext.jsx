import { createContext, useContext, useState } from "react"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
    localStorage.setItem('isAuth', isAuthenticated)
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('isAuth')
  }

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};