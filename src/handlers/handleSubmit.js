import { validateRegisterForm } from "../utils/validation";
import { v4 as uuidv4 } from "uuid"

export const handleRegisterSubmit = (email, password, confirmPassword, setErrorMessage, navigate) => (event) => {
  event.preventDefault()

  const errors = validateRegisterForm(email, password, confirmPassword)
  setErrorMessage(errors)

  const isValid = Object.values(errors).every(error => error === '')

  // If all validations pass
  if (isValid) {
    const userData = { id: uuidv4(), email, password }

    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userData)
    })
      .then((res) => {
        navigate(`/register/identity/${userData.id}`)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}

export const handleIdentitySubmit = (name, selectedGender, navigate, userId) => (event) => {
  event.preventDefault()

  const userData = { name, gender: selectedGender, role: 'user' }

  fetch('http://localhost:3000/users/' + userId, {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(userData)
  })
    .then((res) => {
      navigate('/')
    })
    .catch((err) => {
      console.log(err.message)
    })
}