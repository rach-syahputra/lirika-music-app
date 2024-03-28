import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {

  const [userAuth, setUserAuth] = useState({
    name: '',
    isAuthenticated: false
  })

  const login = (userName) => {
    setUserAuth({ name: userName, isAuthenticated: true })
  }

  const logout = () => {
    setUserAuth({ name: '', isAuthenticated: false })
    localStorage.removeItem('isAuth')
  }

  useEffect(() => {
    localStorage.setItem('isAuth', JSON.stringify(userAuth))
  }, [userAuth])

  return (
    <AuthContext.Provider value={{ userAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
};