import React from 'react'
import "./login.css"
import AuthNavbar from '../../components/authNavbar/AuthNavbar'
import useLoginState from '../../hooks/useLoginState'
import { useNavigate } from 'react-router-dom'
import { handleLoginSubmit } from '../../handlers/handleSubmit'
import { useAuth } from "../../hooks/authContext"

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
  } = useLoginState()

  const navigate = useNavigate()
  const { login } = useAuth()

  return (
    <div className='login'>
      <AuthNavbar />
      <div className="section">
        <form className="signIn"
          onSubmit={handleLoginSubmit(email, password, setErrorMessage, login, navigate)}
        >
          <h1>Sign in to Lirika</h1>
          {errorMessage.auth && <p className='errorMessage'>{errorMessage.auth}</p>}
          <div className="email input">
            <h3>Email address</h3>
            <input type="text" placeholder='name@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            {errorMessage.email && <p className='errorMessage'>{errorMessage.email}</p>}
          </div>

          <div className="password input">
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errorMessage.password && <p className='errorMessage'>{errorMessage.password}</p>}
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