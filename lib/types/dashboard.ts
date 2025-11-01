import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export interface Stat {
  title: string
  value: string
  change: string
  icon: IconDefinition
  color: string
}

export interface Project {
  id?: string
  company: string
  members: string[]
  budget: string
  completion: number
  icon: string
}

export interface Order {
  id?: string
  title: string
  date: string
  icon: IconDefinition
  color: string
}

export interface InfoCardData {
  title: string
  description: string
  image: string
  alt: string
}
