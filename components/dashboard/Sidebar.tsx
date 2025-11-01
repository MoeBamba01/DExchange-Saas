'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHome, 
  faChartLine, 
  faCreditCard, 
  faFileInvoice,
  faUser,
  faRightFromBracket,
  faKey,
  faTable,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils'
import { useTheme } from '@/providers'
import { Switch } from '@/components/ui/switch'

const menuItems = [
  { icon: faHome, label: 'Dashboard', href: '/dashboard', enabled: true },
  { icon: faTable, label: 'Tables', href: '/dashboard/tables', enabled: true },
  { icon: faChartLine, label: 'TRANSACTIONS', href: '/dashboard/transactions', enabled: false },
  { icon: faCreditCard, label: 'Billing', href: '/dashboard/billing', enabled: false },
  { icon: faFileInvoice, label: 'RTL', href: '/dashboard/rtl', enabled: false },
]

const accountItems = [
  { icon: faUser, label: 'Profile', href: '/dashboard/profile', enabled: false },
  { icon: faRightFromBracket, label: 'Sign In', href: '/auth/login', enabled: true },
  { icon: faKey, label: 'Sign Up', href: '/auth/register', enabled: true },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="DEXCHANGE SAAS" 
            className="w-12 h-12 object-contain"
          />
          <span className="font-bold text-gray-800 dark:text-white text-sm tracking-tight">
            DEXCHANGE SAAS
          </span>
        </Link>
      </div>

      {/* Dark Mode Switch */}
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon 
              icon={theme === 'dark' ? faMoon : faSun} 
              className="w-4 h-4 text-gray-600 dark:text-gray-400"
            />
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
              Dark Mode
            </span>
          </div>
          <Switch 
            checked={theme === 'dark'} 
            onCheckedChange={toggleTheme}
          />
        </div>
      </div>

      {/* Menu principal */}
      <div className="flex-1 py-6 px-4">
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Component = item.enabled ? Link : 'div'
            return (
              <Component
                key={item.href}
                {...(item.enabled ? { href: item.href } : {})}
                className={cn(
                  'relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
                  item.enabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-50',
                  isActive && item.enabled
                    ? 'bg-white dark:bg-gray-800 shadow-md'
                    : 'text-gray-500 dark:text-gray-400',
                  item.enabled && !isActive && 'hover:bg-gray-50 dark:hover:bg-gray-800'
                )}
              >
                {/* Indicateur de sélection blanc à gauche */}
                {isActive && item.enabled && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                )}
                
                <div className={cn(
                  'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md',
                  isActive && item.enabled ? 'bg-teal-400' : 'bg-white dark:bg-gray-700'
                )}>
                  <FontAwesomeIcon 
                    icon={item.icon} 
                    className={cn('w-3.5 h-3.5', isActive && item.enabled ? 'text-white' : 'text-teal-400')}
                  />
                </div>
                <span className={cn('text-xs', isActive && item.enabled ? 'text-gray-800 dark:text-white font-semibold' : '')}>{item.label}</span>
              </Component>
            )
          })}
        </nav>

        {/* Section Account Pages */}
        <div className="mt-8">
          <h3 className="px-4 mb-3 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
            Account Pages
          </h3>
          <nav className="space-y-1">
            {accountItems.map((item) => {
              const isActive = pathname === item.href
              const Component = item.enabled ? Link : 'div'
              return (
                <Component
                  key={item.href}
                  {...(item.enabled ? { href: item.href } : {})}
                  className={cn(
                    'relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
                    item.enabled ? 'cursor-pointer' : 'cursor-not-allowed opacity-50',
                    isActive && item.enabled
                      ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-md'
                      : 'text-gray-500 dark:text-gray-400',
                    item.enabled && !isActive && 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  )}
                >
                  {isActive && item.enabled && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
                  )}
                  <div className={cn(
                    'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 shadow-md',
                    isActive && item.enabled ? 'bg-teal-400' : 'bg-white dark:bg-gray-700'
                  )}>
                    <FontAwesomeIcon 
                      icon={item.icon} 
                      className={cn('w-3.5 h-3.5', isActive && item.enabled ? 'text-white' : 'text-teal-400')}
                    />
                  </div>
                  <span className={cn('text-xs', isActive && item.enabled && 'font-semibold dark:text-white')}>{item.label}</span>
                </Component>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Documentation */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl p-6 text-white">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faFileInvoice} className="w-5 h-5 text-teal-500" />
          </div>
          <h4 className="font-bold text-sm mb-2">Need help?</h4>
          <p className="text-xs opacity-90 mb-4">
            Please check our docs
          </p>
          <button className="w-full bg-white text-teal-500 text-xs font-semibold py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
            DOCUMENTATION
          </button>
        </div>
      </div>
    </div>
  )
}
