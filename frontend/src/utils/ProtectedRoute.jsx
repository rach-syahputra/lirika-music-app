import React, { useContext } from 'react'
import { AuthContext } from '../hooks/authContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { currentUser } = useContext(AuthContext)

  return (
    currentUser ? <Outlet /> : <Navigate to='/login' />
  )
}

export default ProtectedRoute