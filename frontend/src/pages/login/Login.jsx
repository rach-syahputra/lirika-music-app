import React, { useContext, useEffect } from 'react'
import './login.css'
import AuthNavbar from '../../components/authNavbar/AuthNavbar'
import useLoginState from '../../hooks/useLoginState'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogin } from '../../handlers/handleSubmit'
import { AuthContext } from '../../hooks/authContext'

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
    // wrapper
    <div className='w-full h-screen'>
      <AuthNavbar />
      {/* login form container */}
      <div className='flex justify-center p-4'>
        {/* login form */}
        <form className='flex flex-col max-w-[340px] gap-6'
          onSubmit={handleLogin(email, password, setError, login, navigate)}
        >
          <span className='text-6xl text-line leading-[1.10] text-white font-bold'>Sign in to Lirika</span>

          {/* inputs container */}
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1 w-full'>
              <span className='text-base text-white font-bold'>Email address</span>
              <input
                type='text'
                placeholder='name@domain.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full p-2 bg-dark text-white font-bold border-2 rounded-md'
              />
              {error.email && <span className='text-base text-red-error'>{error.email}</span>}
            </div>

            <div className='flex flex-col gap-1 w-full'>
              <span className='text-base text-white font-bold'>Password</span>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full p-2 bg-dark text-white font-bold border-2 rounded-md'
              />
              {error.message && <span className='text-base text-red-error'>{error.message}</span>}
            </div>
          </div>

          <button className='w-full p-4 bg-green hover:bg-green-light text-lg text-dark font-bold rounded-md cursor-pointer duration-300' type='submit'>
            Log In
          </button>

          <span className='text-gray text-center'>
            Don't have an account yet? <Link to='/register' className='text-white hover:underline'>Sign up for Lirika</Link>
          </span>

        </form>
      </div>
    </div>
  )
}

export default Login