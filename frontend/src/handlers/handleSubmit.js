import { validateLoginForm, validateRegisterForm, validateIdentityForm } from "../utils/validation";
import axios from "axios"

export const handleRegister = (email, password, confirmPassword, setError, navigate) => async (e) => {
  e.preventDefault()

  // Form input validation
  const errors = validateRegisterForm(email, password, confirmPassword)
  setError(errors)

  const isValid = Object.values(errors).every(error => error === '')

  // If all validations pass
  if (isValid) {
    const userData = {
      email,
      password
    }

    try {
      const res = await axios.post("http://localhost:8800/api/auth/emailAvailabilityCheck", userData)

      // Save the userData temporarily
      localStorage.setItem('userData', JSON.stringify(userData))

      navigate('/register/identity')
    } catch (err) {
      setError(prevError => ({
        ...prevError,
        message: err.response.data.message
      }))
    }
  }
}

export const handleIdentity = (name, selectedGender, setError, navigate) => async (event) => {
  event.preventDefault()

  const storedUserData = JSON.parse(localStorage.getItem('userData'))

  // Form input validation
  const errors = validateIdentityForm(name, selectedGender)
  setError(errors)

  const isValid = Object.values(errors).every(error => error === '')

  // If all validation pass
  if (isValid) {
    const userData = {
      email: storedUserData.email,
      password: storedUserData.password,
      name,
      gender: selectedGender,
      role: 'user'
    }

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", userData)

      localStorage.removeItem("userData");

      console.log('REGISTERED SUCCESSFULLY');
      navigate('/')
    } catch (error) {
      setError(prevError => ({
        ...prevError,
        message: err.response.data.message
      }))
    }
  }
}

export const handleLogin = (email, password, setError, login, navigate) => async (event) => {
  event.preventDefault();


  const errors = validateLoginForm(email)
  setError(errors)

  const isValid = (Object.values(errors).every(error => error === ''))

  if (isValid) {
    try {
      await login(email, password)
      navigate('/')
    } catch (err) {
      setError(prevError => ({
        ...prevError,
        message: err.response.data.message
      }))
    }
  }
}

export const handleLogout = async (event) => {
  try {
    const res = await axios.post("http://localhost:8800/api/auth/logout", {}, {
      withCredentials: true
    })
    localStorage.removeItem('user')
    location.reload(true)
  } catch (err) {
  }
}