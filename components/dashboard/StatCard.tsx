'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: IconDefinition
  color: string
  index: number
}

export default function StatCard({ title, value, change, icon, color, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
        <CardContent className="py-0.5 px-3">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <motion.p 
                className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wide leading-none mb-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {title}
              </motion.p>
              <div className="flex items-baseline gap-2">
                <motion.h3 
                  className="text-lg font-bold text-gray-800 dark:text-white leading-none"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {value}
                </motion.h3>
                <motion.p 
                  className="text-[10px] text-green-500 dark:text-green-400 font-bold leading-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                >
                  {change}
                </motion.p>
              </div>
            </div>
            <motion.div 
              className={`${color} w-10 h-10 rounded-xl flex items-center justify-center shrink-0`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FontAwesomeIcon icon={icon} className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
