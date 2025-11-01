"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <img src="/logo.png" alt="DEXCHANGE SAAS" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <span className="font-semibold text-sm md:text-lg">DEXCHANGE SAAS</span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Link href="/auth/login" className="hidden sm:block">
              <Button variant="ghost" size="sm" className="dark:text-gray-200">Sign In</Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white text-xs md:text-sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-20 flex items-center">
        <section className="w-full grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Simple. Fast. Reliable.</h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6">A lightweight dashboard and table UI to manage your data — quickly get started or explore the demo.</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white">View Dashboard</Button>
              </Link>
              <Link href="/dashboard/tables" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto dark:border-gray-600 dark:text-gray-200">Explore Tables</Button>
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 md:p-6">
            <h3 className="font-semibold mb-3 md:mb-2">Quick Links</h3>
            <ul className="space-y-2.5 md:space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li><Link href="/auth/login" className="hover:text-teal-500 block py-1">Sign In</Link></li>
              <li><Link href="/auth/register" className="hover:text-teal-500 block py-1">Create Account</Link></li>
              <li><Link href="/dashboard" className="hover:text-teal-500 block py-1">Dashboard demo</Link></li>
              <li><Link href="/dashboard/tables" className="hover:text-teal-500 block py-1">Tables demo</Link></li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6 text-center text-xs md:text-sm text-gray-600 dark:text-gray-400">
          © 2025 DEXCHANGE SAAS — Built for simplicity.
        </div>
      </footer>
    </div>
  )
}

