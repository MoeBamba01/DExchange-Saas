'use client'

import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faUser, faChartBar, faBlog, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col bg-white dark:bg-gray-900">
      {/* Arrière-plan avec image */}
      <div 
        className="absolute top-2 left-2 right-2 md:top-4 md:left-4 md:right-4 h-[40vh] md:h-[50vh] bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-3xl"
        style={{ backgroundImage: 'url(/auth-bg.png)' }}
      />

      {/* Navigation */}
      <nav 
        className="relative z-10 flex items-center justify-between px-4 md:px-16 py-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="DEXCHANGE SAAS Logo" 
              style={{ 
                width: '120px', 
                height: '120px', 
                objectFit: 'contain', 
                marginTop: '-30px', 
                marginBottom: '-40px' 
              }}
              className="md:!w-[190px] md:!h-[190px] md:!-mt-10 md:!-mb-[50px]"
            />
          </div>
        </div>
        
        {/* Menu desktop - caché sur mobile */}
        <div className="hidden lg:flex items-center gap-8 text-white text-xs font-medium">
          <Link href="/dashboard" className="hover:opacity-80 flex items-center gap-2">
            <FontAwesomeIcon icon={faChartLine} style={{ width: '20px', height: '20px' }} />
            DASHBOARD
          </Link>
          <Link href="/dashboard/profile" className="hover:opacity-80 flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} style={{ width: '20px', height: '20px' }} />
            PROFILE
          </Link>
          <Link href="/auth/register" className="hover:opacity-80 flex items-center gap-2">
            <FontAwesomeIcon icon={faChartBar} style={{ width: '20px', height: '20px' }} />
            SIGN UP
          </Link>
          <Link href="/auth/login" className="hover:opacity-80 flex items-center gap-2">
            <FontAwesomeIcon icon={faBlog} style={{ width: '20px', height: '20px' }} />
            SIGN IN
          </Link>
        </div>

        {/* Bouton CTA - caché sur mobile, visible sur desktop */}
        <Link href="/">
          <Button className="hidden lg:flex bg-white dark:bg-gray-800 text-teal-500 dark:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-700 border-none px-6 py-2 rounded-full text-xs font-semibold">
            Home
          </Button>
        </Link>

        {/* Bouton hamburger - visible uniquement sur mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 hover:opacity-80"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon 
            icon={mobileMenuOpen ? faTimes : faBars} 
            style={{ width: '24px', height: '24px' }} 
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-24 left-4 right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link 
                href="/dashboard" 
                className="flex items-center gap-3 text-gray-800 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 py-3 border-b border-gray-100 dark:border-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faChartLine} style={{ width: '18px', height: '18px' }} />
                <span className="font-medium">DASHBOARD</span>
              </Link>
              <Link 
                href="/dashboard/profile" 
                className="flex items-center gap-3 text-gray-800 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 py-3 border-b border-gray-100 dark:border-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faUser} style={{ width: '18px', height: '18px' }} />
                <span className="font-medium">PROFILE</span>
              </Link>
              <Link 
                href="/auth/register" 
                className="flex items-center gap-3 text-gray-800 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 py-3 border-b border-gray-100 dark:border-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faChartBar} style={{ width: '18px', height: '18px' }} />
                <span className="font-medium">SIGN UP</span>
              </Link>
              <Link 
                href="/auth/login" 
                className="flex items-center gap-3 text-gray-800 dark:text-white hover:text-teal-500 dark:hover:text-teal-400 py-3 border-b border-gray-100 dark:border-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faBlog} style={{ width: '18px', height: '18px' }} />
                <span className="font-medium">SIGN IN</span>
              </Link>
              <Link href="/">
                <Button 
                  className="bg-teal-500 dark:bg-teal-600 text-white hover:bg-teal-600 dark:hover:bg-teal-700 border-none px-6 py-3 rounded-full font-semibold mt-2 w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenu des pages enfants */}
      {children}
    </div>
  )
}
