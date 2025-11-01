import Image from 'next/image'

interface AvatarProps {
  src: string
  alt: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Avatar({ 
  src, 
  alt, 
  size = 'md',
  className = '' 
}: AvatarProps) {
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  }
  
  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

interface AvatarGroupProps {
  avatars: string[]
  max?: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
}

export function AvatarGroup({ 
  avatars, 
  max = 4, 
  size = 'sm',
  className = '' 
}: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max)
  const remaining = Math.max(avatars.length - max, 0)
  
  return (
    <div className={`flex -space-x-2 ${className}`}>
      {displayAvatars.map((avatar, index) => (
        <Avatar 
          key={index} 
          src={avatar} 
          alt={`Member ${index + 1}`} 
          size={size}
          className="border-2 border-white dark:border-gray-800"
        />
      ))}
      {remaining > 0 && (
        <div className={`flex items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800 text-xs font-medium text-gray-700 dark:text-gray-300 ${size === 'xs' ? 'w-6 h-6' : size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-12 h-12'}`}>
          +{remaining}
        </div>
      )}
    </div>
  )
}
