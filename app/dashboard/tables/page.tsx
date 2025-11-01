"use client"

import { AuthorsTable, ProjectsTableFull } from '@/components/dashboard'
import { useTables } from '@/lib/hooks'

export default function TablesPage() {
  const { authors, projects } = useTables()

  // Adapter les données pour ProjectsTableFull (qui attend un format différent)
  const projectsData = [
    {
      id: 1,
      company: 'Chakra Soft UI Version',
      budget: '$14,000',
      status: 'Working' as const,
      completion: 60,
      icon: '/chakra-logo.png',
      iconBg: 'bg-purple-100'
    },
    {
      id: 2,
      company: 'Add Progress Track',
      budget: '$3,000',
      status: 'Cancelled' as const,
      completion: 10,
      icon: '/Icon.png',
      iconBg: 'bg-blue-100'
    },
    {
      id: 3,
      company: 'Fix Platform Errors',
      budget: 'Not set',
      status: 'Done' as const,
      completion: 100,
      icon: '/Group 3.png',
      iconBg: 'bg-green-100'
    },
    {
      id: 4,
      company: 'Launch our Mobile App',
      budget: '$32,000',
      status: 'Done' as const,
      completion: 100,
      icon: '/slack-new-logo 1.png',
      iconBg: 'bg-green-100'
    },
    {
      id: 5,
      company: 'Add the New Pricing Page',
      budget: '$400',
      status: 'Working' as const,
      completion: 25,
      icon: '/Adobe_XD_CC_icon 1.png',
      iconBg: 'bg-blue-100'
    }
  ]

  return (
    <div className="w-full max-w-full overflow-x-hidden px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8 space-y-4 md:space-y-6">
      {/* Breadcrumb */}
      <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
        Pages / <span className="text-gray-800 dark:text-white">Tables</span>
      </div>

      {/* Authors Table */}
      <div className="w-full max-w-full">
        <AuthorsTable authors={authors} />
      </div>

      {/* Projects Table */}
      <div className="w-full max-w-full">
        <ProjectsTableFull projects={projectsData} />
      </div>
    </div>
  )
}
