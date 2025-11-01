'use client'

import { useState } from 'react'
import RegisterScreen from '../screens/RegisterScreen'

export default function RegisterPage() {
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simuler un appel d'API
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <RegisterScreen 
      onSubmit={handleSubmit}
      isLoading={isLoading}
      rememberMe={rememberMe}
      setRememberMe={setRememberMe}
    />
  )
}