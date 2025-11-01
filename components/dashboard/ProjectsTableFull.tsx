"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

interface Project {
  id: number
  company: string
  budget: string
  status: 'Working' | 'Cancelled' | 'Done'
  completion: number
  icon: string
  iconBg: string
}

interface ProjectsTableFullProps {
  projects: Project[]
}

export function ProjectsTableFull({ projects }: ProjectsTableFullProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Working':
        return 'text-gray-700 dark:text-gray-300'
      case 'Done':
        return 'text-gray-700 dark:text-gray-300'
      case 'Cancelled':
        return 'text-gray-700 dark:text-gray-300'
      default:
        return 'text-gray-700 dark:text-gray-300'
    }
  }

  const getCompletionColor = (completion: number) => {
    if (completion === 100) return 'bg-teal-500'
    if (completion >= 50) return 'bg-teal-400'
    return 'bg-teal-300'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="bg-white dark:bg-gray-800 border-0 shadow-sm dark:shadow-gray-900/50">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800 dark:text-white">Projects</CardTitle>
          <CardDescription className="flex items-center gap-1.5 text-sm">
            <span className="text-teal-500 dark:text-teal-400 font-semibold">
              <svg className="w-3 h-3 inline mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              30 done
            </span>
            <span className="text-gray-400 dark:text-gray-500">this month</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <th className="text-left py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Companies
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    Completion
                  </th>
                  <th className="text-right py-3 px-4 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <motion.tr
                    key={project.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${project.iconBg} flex items-center justify-center flex-shrink-0 p-2`}>
                          <Image
                            src={project.icon}
                            alt={project.company}
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-sm font-semibold text-gray-800 dark:text-white">
                          {project.company}
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {project.budget}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className={`text-sm font-semibold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="text-sm font-semibold text-teal-500 dark:text-teal-400">
                          {project.completion}%
                        </div>
                        <div className="flex-1 max-w-[120px]">
                          <div className="h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${project.completion}%` }}
                              transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                              className={`h-full ${getCompletionColor(project.completion)} rounded-full`}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors" aria-label="Options">
                        <FontAwesomeIcon icon={faEllipsisVertical} className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center flex-shrink-0 p-2.5`}>
                      <Image
                        src={project.icon}
                        alt={project.company}
                        width={28}
                        height={28}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-white">
                        {project.company}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {project.budget}
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2" aria-label="Options">
                    <FontAwesomeIcon icon={faEllipsisVertical} className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Status</div>
                    <div className={`font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase mb-1">Completion</div>
                    <div className="font-semibold text-teal-500 dark:text-teal-400">
                      {project.completion}%
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.completion}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className={`h-full ${getCompletionColor(project.completion)} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
