'use client'

import { useMemo } from 'react'
import { authorsData, projectsTableData } from '@/data/tables'

export function useTables() {
  const authors = useMemo(() => authorsData, [])
  const projects = useMemo(() => projectsTableData, [])
  
  return {
    authors,
    projects,
  }
}
