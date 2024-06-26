const validateRegisterForm = (email, password, confirmPassword) => {
  const errors = {
    email: '',
    password: '',
    confirmPassword: ''
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address'
  }

  // Password length validation
  if (password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }

  // Password confirmation validation
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match'
  }

  return errors
}

const validateIdentityForm = (name, gender) => {
  const errors = {
    name: '',
    gender: ''
  }

  // Name validation
  if (!name.length > 0) {
    errors.name = 'Name can not be blank'
  }
  // Gender validation
  if (!gender) {
    errors.gender = 'Choose gender'
  }

  return errors
}

const validateLoginForm = (email) => {
  const errors = {
    email: ''
  }

  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.email = 'Please enter a valid email address'
  }
  return errors
}

export { validateRegisterForm, validateIdentityForm, validateLoginForm }