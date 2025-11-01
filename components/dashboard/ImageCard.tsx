'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface ImageCardProps {
  title: string
  description: string
  image: string
  alt: string
}

export default function ImageCard({ title, description, image, alt }: ImageCardProps) {
  return (
        <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-[220px] bg-white dark:bg-gray-800 p-4">
        <div className="relative h-full rounded-2xl overflow-hidden">
          {/* Image de fond */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
          </motion.div>

          {/* Contenu texte */}
          <div className="relative h-full flex flex-col justify-between p-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-base font-bold mb-2">{title}</h3>
              <p className="text-xs opacity-90">{description}</p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ x: 5 }}
              className="text-xs font-semibold flex items-center gap-2 self-start"
            >
              Read more
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
