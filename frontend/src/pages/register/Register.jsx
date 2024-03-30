import React, { useState } from 'react'
import "./register.css"
import AuthNavbar from '../../components/authNavbar/AuthNavbar'
import { useNavigate } from 'react-router-dom'
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
          className='signUp'
          onSubmit={handleRegister(email, password, confirmPassword, setError, navigate)}>
          <h1>Sign up to start listening</h1>

          <div className="email input">
            <h3>Email address</h3>
            <input type="text" placeholder='name@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            {error.email && <p className='errorMessage'>{error.email}</p>}
          </div>

          <div className="password input">
            <h3>Password</h3>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {error.password && <p className='errorMessage'>{error.password}</p>}
          </div>

          <div className="confirmPassword input">
            <h3>Confirm Password</h3>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            {error.confirmPassword && <p className='errorMessage'>{error.confirmPassword}</p>}

          </div>

          {error.message && <p className='errorMessage'>{error.message}</p>}
          <button className='nextButton' type='submit'>
            Next
          </button>

          <hr />

          <p>Already have an account? <span>Log in here</span></p>
        </form>
      </div>
    </div>
  )
}

export default Register