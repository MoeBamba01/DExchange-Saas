"use client"

import Link from 'next/link'
import { useTheme } from '@/providers'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="DEXCHANGE SAAS" className="w-10 h-10 object-contain" />
            <span className="font-semibold text-lg">DEXCHANGE SAAS</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
            </div>
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className="dark:text-gray-200">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-20 flex items-center">
        <section className="w-full grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">Simple. Fast. Reliable.</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">A lightweight dashboard and table UI to manage your data — quickly get started or explore the demo.</p>

            <div className="flex gap-3">
              <Link href="/dashboard">
                <Button className="bg-teal-500 hover:bg-teal-600 text-white">View Dashboard</Button>
              </Link>
              <Link href="/dashboard/tables">
                <Button variant="outline" className="dark:border-gray-600 dark:text-gray-200">Explore Tables</Button>
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><Link href="/auth/login" className="hover:text-teal-500">Sign In</Link></li>
              <li><Link href="/auth/register" className="hover:text-teal-500">Create Account</Link></li>
              <li><Link href="/dashboard" className="hover:text-teal-500">Dashboard demo</Link></li>
              <li><Link href="/dashboard/tables" className="hover:text-teal-500">Tables demo</Link></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 DEXCHANGE SAAS — Built for simplicity.
        </div>
      </footer>
    </div>
  )
}

