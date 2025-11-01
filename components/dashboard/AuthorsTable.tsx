"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Author } from '@/lib/types'

interface AuthorsTableProps {
  authors: Author[]
}

export function AuthorsTable({ authors }: AuthorsTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm dark:shadow-gray-900/50">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800 dark:text-white">Authors Table</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Function
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Employed
                  </th>
                  <th className="text-right py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {authors.map((author, index) => (
                  <motion.tr
                    key={author.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                          <Image
                            src={author.avatar}
                            alt={author.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800 dark:text-white">
                            {author.name}
                          </div>
                          <div className="text-xs text-gray-400 dark:text-gray-500">
                            {author.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {author.function}
                        </div>
                        <div className="text-xs text-gray-400 dark:text-gray-500">
                          {author.department}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold ${
                          author.status === 'Online'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {author.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {author.employed}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 font-medium transition-colors">
                        Edit
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {authors.map((author, index) => (
              <motion.div
                key={author.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                    <Image
                      src={author.avatar}
                      alt={author.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-800 dark:text-white">
                      {author.name}
                    </div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">
                      {author.email}
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      author.status === 'Online'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {author.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Function</div>
                    <div className="font-semibold text-gray-700 dark:text-gray-300">{author.function}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{author.department}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Employed</div>
                    <div className="font-medium text-gray-700 dark:text-gray-300">{author.employed}</div>
                  </div>
                </div>

                <button className="w-full text-sm text-teal-500 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 font-medium transition-colors text-center py-2 border-t border-gray-200 dark:border-gray-600">
                  Edit
                </button>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
