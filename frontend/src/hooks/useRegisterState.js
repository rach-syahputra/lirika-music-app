import { useState } from 'react'

const useRegisterState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('')
  const [selectedGender, setSelectedGender] = useState('')
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    message: '',
    name: '',
    gender: ''
  });
  const [isValid, setIsValid] = useState(false);

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    name,
    setName,
    selectedGender,
    setSelectedGender,
    error,
    setError
  }
}

export default useRegisterState