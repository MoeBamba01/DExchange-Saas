'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

interface InfoCardProps {
  title: string
  description: string
  image: string
  alt: string
  hasBackground?: boolean
}

export default function InfoCard({ title, description, image, alt, hasBackground = false }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.02, y: -4 }}
    >
      <Card className="border-none shadow-sm hover:shadow-lg transition-all overflow-hidden h-[220px] bg-white dark:bg-gray-800">
        <CardContent className="p-0 h-full flex items-stretch">
          {/* Texte à gauche */}
          <motion.div 
            className="flex-1 p-6 lg:p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div>
              <motion.p 
                className="text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase mb-1 tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Lorem ipsum
              </motion.p>
              <motion.h3 
                className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {title}
              </motion.h3>
              <motion.p 
                className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {description}
              </motion.p>
            </div>
            <motion.button 
              className="text-xs font-semibold text-gray-800 dark:text-gray-300 self-start mt-4"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Read more →
            </motion.button>
          </motion.div>
          
          {/* Image Chakra à droite */}
          <motion.div 
            className="w-1/2 flex items-center justify-end pr-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.img 
              src={image} 
              alt={alt} 
              className="max-w-[85%] h-auto object-contain rounded-2xl"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
