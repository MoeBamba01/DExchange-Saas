'use client'

import { Sidebar } from '@/components/dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ROUTES } from '@/lib/utils/constants'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar desktop */}
      <aside className="hidden lg:block fixed left-0 top-0 h-full">
        <Sidebar />
      </aside>

      {/* Sidebar mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            />
            
            {/* Sidebar mobile */}
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25 }}
              className="lg:hidden fixed left-0 top-0 h-full z-50"
            >
              <Sidebar />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Contenu principal */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 lg:px-8 py-4">
            {/* Bouton menu mobile + breadcrumb */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} className="w-5 h-5" />
              </button>
              
              <div className="hidden sm:block">
                <p className="text-xs text-gray-500 dark:text-gray-400">Pages / Dashboard</p>
                <h1 className="text-sm font-bold text-gray-800 dark:text-white">Dashboard</h1>
              </div>
            </div>

            {/* Barre de recherche et actions */}
            <div className="flex items-center gap-3">
              {/* Barre de recherche */}
              <div className="hidden md:flex items-center gap-2 bg-gray-50 dark:bg-gray-700 rounded-full px-4 py-2 border border-gray-200 dark:border-gray-600">
                <FontAwesomeIcon icon={faSearch} className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Type here..."
                  className="bg-transparent text-sm text-gray-600 dark:text-gray-300 outline-none w-32 lg:w-48 placeholder:text-gray-400 dark:placeholder:text-gray-500"
                />
              </div>

              {/* Icônes */}
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                <FontAwesomeIcon icon={faBell} className="w-4 h-4" />
              </button>
              <Link href={ROUTES.login}>
                <Button 
                  size="sm" 
                  className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 text-xs font-semibold hidden sm:flex"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Contenu de la page */}
        <main className="p-4 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
