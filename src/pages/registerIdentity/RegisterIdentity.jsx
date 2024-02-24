import React from 'react'
import "./registerIdentity.css"
import AuthNavbar from '../../components/authNavbar/AuthNavbar'
import useRegisterStateIdentity from '../../hooks/useRegisterIdentityState'
import { handleIdentitySubmit } from '../../handlers/handleSubmit.js'
import { useNavigate, useParams } from 'react-router-dom'

const RegisterIdentity = () => {

  const {
    name,
    setName,
    selectedGender,
    setSelectedGender
  } = useRegisterStateIdentity()

  const navigate = useNavigate()
  const { userId } = useParams()

  return (
    <div className='register'>
      <AuthNavbar />
      <div className="section">
        <form className='identity' onSubmit={handleIdentitySubmit(name, selectedGender, navigate, userId)}>
          <h2>Tell us about yourself</h2>
          <div className="name input">
            <div className="title">
              <h3>Name</h3>
              <h5>This name will appear in your profile.</h5>
            </div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="gender input">
            <div className="title">
              <h3>Gender</h3>
              <h5>We use your gender to help personalize our content recommendations for you.</h5>
            </div>
            <div className="radio">
              <div className="male">
                <input
                  type="radio"
                  name='gender'
                  value='male'
                  checked={selectedGender === 'male'}
                  onChange={(e) => setSelectedGender(e.target.value)}
                />
                Male
              </div>
              <div className="female">
                <input
                  type="radio"
                  name='gender'
                  value='female'
                  checked={selectedGender === 'female'}
                  onChange={(e) => setSelectedGender(e.target.value)}
                />
                Female
              </div>
            </div>
          </div>

          <button className='signUpButton' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default RegisterIdentity