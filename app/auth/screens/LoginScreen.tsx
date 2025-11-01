'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { ButtonLoader } from '@/components/ui/loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

interface LoginScreenProps {
  onSubmit: (e: React.FormEvent) => void
  isLoading: boolean
  rememberMe: boolean
  setRememberMe: (value: boolean) => void
}

export default function LoginScreen({ onSubmit, isLoading, rememberMe, setRememberMe }: LoginScreenProps) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start pt-8 md:pt-16 px-4 pb-12 md:pb-20">
      <motion.h1 
        className="text-white text-3xl md:text-5xl font-bold mb-10 md:mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Welcome Back!
      </motion.h1>

      {/* Carte de connexion */}
      <motion.div 
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-md"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-center text-gray-800 dark:text-white font-semibold text-sm md:text-base mb-6 md:mb-8">Sign in with</h2>

        {/* Boutons de connexion sociale */}
        <div className="flex justify-center gap-3 md:gap-4 mb-6 md:mb-8">
          <motion.button 
            className="w-12 h-12 md:w-16 md:h-16 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 flex items-center justify-center transition-colors bg-white dark:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faFacebookF} style={{ width: '20px', height: '20px' }} className="text-gray-800 dark:text-white md:!w-[24px] md:!h-[24px]" />
          </motion.button>
          <motion.button 
            className="w-12 h-12 md:w-16 md:h-16 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 flex items-center justify-center transition-colors bg-white dark:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faApple} style={{ width: '24px', height: '24px' }} className="text-gray-800 dark:text-white md:!w-[28px] md:!h-[28px]" />
          </motion.button>
          <motion.button 
            className="w-12 h-12 md:w-16 md:h-16 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 flex items-center justify-center transition-colors bg-white dark:bg-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faGoogle} style={{ width: '20px', height: '20px' }} className="text-gray-800 dark:text-white md:!w-[24px] md:!h-[24px]" />
          </motion.button>
        </div>

        <div className="relative mb-6 md:mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 text-xs">or</span>
          </div>
        </div>

        {/* Formulaire de connexion */}
        <form className="space-y-4 md:space-y-5" onSubmit={onSubmit}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-xs font-medium mb-2 block">Email</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Your email address"
              className="border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-teal-400 focus:ring-teal-400 focus:ring-1 h-11 rounded-xl placeholder:text-gray-300 dark:placeholder:text-gray-500 text-sm"
              disabled={isLoading}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <Label htmlFor="password" className="text-gray-700 dark:text-gray-300 text-xs font-medium mb-2 block">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="Your password"
              className="border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-teal-400 focus:ring-teal-400 focus:ring-1 h-11 rounded-xl placeholder:text-gray-300 dark:placeholder:text-gray-500 text-sm"
              disabled={isLoading}
            />
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-1 gap-3 sm:gap-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <Switch 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={setRememberMe}
                className="data-[state=checked]:bg-teal-400"
                disabled={isLoading}
              />
              <Label htmlFor="remember" className="text-xs text-gray-700 dark:text-gray-300 cursor-pointer font-normal">
                Remember me
              </Label>
            </div>
            <Link href="/forgot-password" className="text-xs text-teal-400 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold">
              Forgot password?
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Button 
              type="submit" 
              className="w-full bg-teal-400 hover:bg-teal-500 text-white font-semibold h-11 text-xs md:text-sm rounded-xl uppercase tracking-wide mt-4 md:mt-6"
              disabled={isLoading}
            >
              {isLoading ? <ButtonLoader /> : 'SIGN IN'}
            </Button>
          </motion.div>

          <div className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3 md:mt-4 pt-2">
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-teal-400 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300 font-semibold">
              Sign up
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
