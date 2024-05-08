import React, { useContext, useEffect } from 'react'
import "./login.css"
import AuthNavbar from '../../components/authNavbar/AuthNavbar'
import useLoginState from '../../hooks/useLoginState'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogin } from '../../handlers/handleSubmit'
import { AuthContext } from "../../hooks/authContext"

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
  } = useLoginState()

  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  return (
    <div className='login'>
      <AuthNavbar />
      <div className="section">
        <form className="sign-in-form"
          onSubmit={handleLogin(email, password, setError, login, navigate)}
        >
          <h1>Sign in to Lirika</h1>

          <div className="email input">
            <h3>Email address</h3>
            <input type="text" placeholder='name@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            {error.email && <p className='error-message'>{error.email}</p>}
          </div>

          <div className="password input">
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error.message && <p className='error-message'>{error.message}</p>}
          </div>

          <button className='sign-in-button' type='submit'>
            Log In
          </button>

          <p className='sign-up'>
            Don't have an account yet? <Link to='/register' className='sign-up-button'>Sign up for Lirika</Link>
          </p>

        </form>
      </div>
    </div>
  )
}

export default Login