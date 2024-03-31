import React, { useContext, useEffect } from 'react'
import "./login.css"
import AuthNavbar from '../../components/authNavbar/AuthNavbar'
import useLoginState from '../../hooks/useLoginState'
import { useNavigate } from 'react-router-dom'
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
        <form className="signIn"
          onSubmit={handleLogin(email, password, setError, login, navigate)}
        >
          <h1>Sign in to Lirika</h1>

          <div className="email input">
            <h3>Email address</h3>
            <input type="text" placeholder='name@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            {error.email && <p className='errorMessage'>{error.email}</p>}
          </div>

          <div className="password input">
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error.message && <p className='errorMessage'>{error.message}</p>}
          </div>

          <button className='signInButton' type='submit'>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login