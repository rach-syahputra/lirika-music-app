import { useState } from 'react'

const useRegisterState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState({});
  const [isValid, setIsValid] = useState(false);

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errorMessage,
    setErrorMessage,
    isValid,
    setIsValid,
  }
}

export default useRegisterState