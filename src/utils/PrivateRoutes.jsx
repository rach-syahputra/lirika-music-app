import { Outlet, Navigate, useOutletContext } from 'react-router-dom'
// import { useAuth } from '../hooks/authContext'

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem('isAuth')
  console.log('Private Route: ', isAuthenticated)
  return (
    isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoutes