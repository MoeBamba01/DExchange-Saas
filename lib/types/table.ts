export interface Author {
  id: number
  name: string
  email: string
  function: string
  department: string
  role?: string
  status: 'Online' | 'Offline'
  employed: string
  avatar: string
}

export interface ProjectTableRow {
  company: string
  members: string[]
  budget: string
  completion: number
  icon: string
}

export type BadgeVariant = 'success' | 'default' | 'secondary' | 'destructive'
export type StatusType = 'Online' | 'Offline'
