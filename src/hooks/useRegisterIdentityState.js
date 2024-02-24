import { useState } from 'react'
import { useParams } from 'react-router-dom'

const useRegisterStateIdentity = () => {
  const [name, setName] = useState('')
  const [selectedGender, setSelectedGender] = useState('')

  return {
    name,
    setName,
    selectedGender,
    setSelectedGender,
  }
}

export default useRegisterStateIdentity