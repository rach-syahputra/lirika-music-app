import { validateRegisterForm } from "../utils/validation";
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

    // fetch('http://localhost:3000/users', {
    //   method: 'POST',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(userData)
    // })
    //   .then((res) => {
    //     navigate(`/register/identity/${userData.id}`)
    //   })
    //   .catch((err) => {
    //     console.log(err.message)
    //   })
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
  })
    .then((res) => {
      localStorage.removeItem('userData')
      navigate('/')
    })
    .catch((err) => {
      console.log(err.message)
    })
}