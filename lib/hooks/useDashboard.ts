'use client'

import { useMemo } from 'react'
import { dashboardStats, dashboardProjects, dashboardOrders } from '@/data/dashboard'

export function useDashboard() {
  const stats = useMemo(() => dashboardStats, [])
  const projects = useMemo(() => dashboardProjects, [])
  const orders = useMemo(() => dashboardOrders, [])
  
  // Dans le futur, on peut ajouter:
  // - useState pour isLoading
  // - useEffect pour fetch data from API
  // - error handling
  
  return {
    stats,
    projects,
    orders,
  }
}
