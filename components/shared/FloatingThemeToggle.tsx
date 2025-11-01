"use client"

import { useTheme } from '@/providers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 dark:from-purple-600 dark:to-purple-700 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center text-white cursor-pointer"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FontAwesomeIcon 
          icon={theme === 'dark' ? faMoon : faSun} 
          className="w-6 h-6"
        />
      </motion.div>
    </motion.button>
  )
}
