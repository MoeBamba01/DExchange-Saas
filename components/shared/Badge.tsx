import { BadgeVariant } from '@/lib/types'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

export function Badge({ 
  children, 
  variant = 'default',
  className = '' 
}: BadgeProps) {
  const variantClasses = {
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
    secondary: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    destructive: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
  }
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}
