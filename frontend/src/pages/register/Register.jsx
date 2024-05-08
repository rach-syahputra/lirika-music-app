import React from 'react'
import "./register.css"
import AuthNavbar from '../../components/authNavbar/AuthNavbar'
import { Link, useNavigate } from 'react-router-dom'
import useRegisterState from '../../hooks/useRegisterState'
import { handleRegister } from '../../handlers/handleSubmit'

const Register = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError
  } = useRegisterState()

  const navigate = useNavigate()

  return (
    <div className='register'>
      <AuthNavbar />
      <div className="section">
        <form
          className='sign-up'
          onSubmit={handleRegister(email, password, confirmPassword, setError, navigate)}>
          <h1>Sign up to start listening</h1>

          <div className="email input">
            <h3>Email address</h3>
            <input type="text" placeholder='name@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            {error.email && <p className='error-message'>{error.email}</p>}
          </div>

          <div className="password input">
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error.password && <p className='error-message'>{error.password}</p>}
          </div>

          <div className="confirm-password input">
            <h3>Confirm Password</h3>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {error.confirmPassword && <p className='error-message'>{error.confirmPassword}</p>}

          </div>

          {error.message && <p className='error-message'>{error.message}</p>}
          <button className='next-button' type='submit'>
            Next
          </button>

          <hr />

          <p className='sign-in'>
            Already have an account? <Link to='/login' className='sign-in-button'>Log in here</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register