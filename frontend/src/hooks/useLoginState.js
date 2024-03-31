import { useState } from 'react'

const useLoginState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [redirectToHome, setRedirectToHome] = useState(false)

  return {
    email,
    setEmail,
    password,
    setPassword,
    user,
    setUser,
    error,
    setError
  }
}

export default useLoginState