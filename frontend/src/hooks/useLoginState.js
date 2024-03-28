import { useState } from 'react'

const useLoginState = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const [redirectToHome, setRedirectToHome] = useState(false)

  return {
    email,
    setEmail,
    password,
    setPassword,
    user,
    setUser,
    errorMessage,
    setErrorMessage,
    redirectToHome,
    setRedirectToHome
  }
}

export default useLoginState