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
    <div className='w-full h-screen'>
      <AuthNavbar />
      <div className="flex justify-center p-4">
        <form
          className='flex flex-col max-w-[340px] gap-4'
          onSubmit={handleRegister(email, password, confirmPassword, setError, navigate)}>
          <span className='text-6xl text-line leading-[1.10] text-white font-bold'>Sign up to start listening</span>

          {/* inputs container */}
          <div className='flex flex-col gap-4'>
            <div className="flex flex-col gap-1 w-full">
              <span className='text-base text-white font-bold'>Email address</span>
              <input
                type="text"
                placeholder='name@domain.com'
                value={email} onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 bg-dark text-white font-bold border-2 rounded-md'
              />
              {error.email && <span className='text-base text-red-error'>{error.email}</span>}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <span className='text-base text-white font-bold'>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 bg-dark text-white font-bold border-2 rounded-md'
              />
              {error.password && <span className='text-base text-red-error'>{error.password}</span>}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <span className='text-base text-white font-bold'>Confirm Password</span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-full p-2 bg-dark text-white font-bold border-2 rounded-md'
              />
              {error.confirmPassword && <span className='text-base text-red-error'>{error.confirmPassword}</span>}
            </div>
            {error.message && <span className='text-base text-red-error'>{error.message}</span>}
          </div>

          <button className='w-full p-4 bg-green hover:bg-green-light text-lg text-dark font-bold rounded-md cursor-pointer duration-300' type='submit'>
            Next
          </button>

          <hr />

          <span className='text-gray text-center'>
            Already have an account? <Link to='/login' className='text-white hover:underline'>Log in here</Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Register