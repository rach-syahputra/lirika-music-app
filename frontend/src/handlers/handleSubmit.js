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
        message: err.response.data.error
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
        message: err.response.data.error
      }))
    }
  }
}

export const handleLoginSubmit = (email, password, setErrorMessage, login, navigate) => async (event) => {
  event.preventDefault();

  let user = [{
    email: '',
    password: ''
  }]

  let userName = ''

  try {
    const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`, { method: 'GET' })

    if (!response.ok) throw new Error('Network response was not ok')

    const data = await response.json()

    if (data.length === 1) {
      user = data
      userName = data[0].name
    }

    // response from the server is an array. Accessing the first element of that array 'user[0]'
    const errors = validateLoginForm(email, password, user[0])
    setErrorMessage(errors)

    const isValid = (Object.values(errors).every(error => error === ''))

    if (isValid) {
      login(userName)
      navigate('/')
    }

  } catch (error) {
    console.error(error)
  }
}