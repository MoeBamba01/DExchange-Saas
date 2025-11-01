'use client'

import { motion } from 'framer-motion'

export function Loader() {
  return (
    <div className="fixed inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-4 border-teal-200 dark:border-teal-800 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Inner spinning circle */}
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-teal-500 dark:border-t-teal-400 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <motion.p
          className="text-sm text-gray-600 dark:text-gray-300 font-medium"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

export function ButtonLoader({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const dotClass = variant === 'light' ? 'bg-white' : 'bg-teal-500'
  
  return (
    <div className="flex items-center justify-center gap-1">
      <motion.div
        className={`w-2 h-2 ${dotClass} rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.div
        className={`w-2 h-2 ${dotClass} rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.2,
        }}
      />
      <motion.div
        className={`w-2 h-2 ${dotClass} rounded-full`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.4,
        }}
      />
    </div>
  )
}

export function InlineLoader() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-12 h-12">
        <motion.div
          className="absolute inset-0 border-3 border-teal-200 dark:border-teal-800 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 border-3 border-transparent border-t-teal-500 dark:border-t-teal-400 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  )
}

export function SkeletonLoader({ rows = 3 }: { rows?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="h-16 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
        </div>
      ))}
    </div>
  )
}

