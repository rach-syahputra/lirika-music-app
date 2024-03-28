import { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/authContext'

const PrivateRoutes = () => {
  const { userAuth } = useAuth()

  console.log(userAuth);

  return (
    userAuth && userAuth.isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoutes