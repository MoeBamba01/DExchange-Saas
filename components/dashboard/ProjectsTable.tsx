'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

interface Project {
  company: string
  members: string[]
  budget: string
  completion: number
  icon: string
}

interface ProjectsTableProps {
  projects: Project[]
}

export default function ProjectsTable({ projects }: ProjectsTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-gray-800 dark:text-white text-base">Projects</CardTitle>
              <CardDescription className="text-xs mt-1">
                <span className="text-teal-400 dark:text-teal-400 font-semibold">30 done</span> <span className="dark:text-gray-500">this month</span>
              </CardDescription>
            </div>
            <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300" aria-label="Options">
              <FontAwesomeIcon icon={faEllipsisV} className="w-4 h-4" />
            </button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <th className="text-left text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-6 py-3">Companies</th>
                  <th className="text-left text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-6 py-3 hidden md:table-cell">Members</th>
                  <th className="text-left text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-6 py-3 hidden sm:table-cell">Budget</th>
                  <th className="text-left text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-6 py-3">Completion</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <motion.tr 
                    key={index} 
                    className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center shrink-0 p-1.5">
                          <Image
                            src={project.icon}
                            alt={project.company}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-800 dark:text-white line-clamp-1">
                          {project.company}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <div className="flex -space-x-2">
                        {project.members.slice(0, 4).map((member, i) => (
                          <motion.div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 overflow-hidden"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                            whileHover={{ scale: 1.2, zIndex: 10 }}
                          >
                            <img src={member} alt="" className="w-full h-full object-cover" />
                          </motion.div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span className="text-sm font-semibold text-gray-800 dark:text-white">{project.budget}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-teal-500 dark:text-teal-400 min-w-[35px]">
                          {project.completion}%
                        </span>
                        <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-1.5 max-w-[100px]">
                          <motion.div
                            className="bg-teal-400 dark:bg-teal-500 h-1.5 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${project.completion}%` }}
                            transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
