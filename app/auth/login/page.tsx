'use client'

import { useState } from 'react'
import LoginScreen from '../screens/LoginScreen'

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <LoginScreen 
      onSubmit={handleSubmit}
      isLoading={isLoading}
      rememberMe={rememberMe}
      setRememberMe={setRememberMe}
    />
  )
}