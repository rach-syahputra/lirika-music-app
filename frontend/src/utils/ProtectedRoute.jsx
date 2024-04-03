import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../hooks/authContext'
import { Navigate, Outlet } from 'react-router-dom'
import axios from 'axios'

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext)
  const [authenticated, setAuthenticated] = useState(false)
  const [isAuthChecked, setIsAuthChecked] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authenticated = await isAuthenticated()
        setAuthenticated(authenticated)
        console.log('isAuthenticated ', authenticated)
      } catch (err) {
        console.log('Protected Route Error: ', err)
        setIsAuthChecked(false)
      } finally {
        setIsAuthChecked(true)
      }
    }
    checkAuth()
  })

  // Show loading indicator or nothing until authentication check is complete
  if (!isAuthChecked) return null

  // If authentication check is complete

  return (
    authenticated ? <Outlet /> : <Navigate to='/login' />
  )
}

export default ProtectedRoute