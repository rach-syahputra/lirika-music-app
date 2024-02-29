import { validateLoginForm, validateRegisterForm } from "../utils/validation";
import { v4 as uuidv4 } from "uuid"

export const handleRegisterSubmit = (email, password, confirmPassword, setErrorMessage, navigate) => (event) => {
  event.preventDefault()

  const errors = validateRegisterForm(email, password, confirmPassword)
  setErrorMessage(errors)

  const isValid = Object.values(errors).every(error => error === '')

  // If all validations pass
  if (isValid) {
    const userData = {
      id: uuidv4(),
      email,
      password
    }

    // Save the userData temporarily
    localStorage.setItem('userData', JSON.stringify(userData))

    navigate(`/register/identity`)
  }
}

export const handleIdentitySubmit = (name, selectedGender, navigate) => (event) => {
  event.preventDefault()

  const storedUserData = JSON.parse(localStorage.getItem('userData'))

  const userData = {
    id: storedUserData.id,
    email: storedUserData.email,
    password: storedUserData.password,
    name,
    gender: selectedGender,
    role: 'user'
  }

  fetch('http://localhost:3000/users/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(userData)
  }).then((res) => {
    localStorage.removeItem('userData')
    navigate('/')
  }).catch((err) => {
    console.log(err.message)
  })
}

export const handleLoginSubmit = (email, password, setErrorMessage, login, navigate) => async (event) => {
  event.preventDefault();

  let user = [{
    email: '',
    password: ''
  }]

  try {
    const response = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`, { method: 'GET' })

    if (!response.ok) throw new Error('Network response was not ok')

    const data = await response.json()

    if (data.length === 1) {
      user = data
    }

    // response from the server is an array. Accessing the first element of that array 'user[0]'
    const errors = validateLoginForm(email, password, user[0])
    setErrorMessage(errors)

    const isValid = (Object.values(errors).every(error => error === ''))

    console.log(isValid)
    if (isValid) {
      login()
      navigate('/')
    }

  } catch (error) {
    console.error(error)
  }
}