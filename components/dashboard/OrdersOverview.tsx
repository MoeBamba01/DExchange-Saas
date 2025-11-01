'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

interface Order {
  title: string
  date: string
  icon: IconDefinition
  color: string
}

interface OrdersOverviewProps {
  orders: Order[]
}

export default function OrdersOverview({ orders }: OrdersOverviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-800 dark:text-white text-base">Orders overview</CardTitle>
          <CardDescription className="text-xs mt-1">
            <span className="text-green-500 dark:text-green-400 font-semibold">+30%</span> <span className="dark:text-gray-500">this month</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {orders.map((order, index) => (
              <motion.div 
                key={index} 
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${order.color} bg-opacity-10 dark:bg-opacity-20`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={order.icon} className={`w-4 h-4 ${order.color}`} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white line-clamp-2">{order.title}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{order.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
