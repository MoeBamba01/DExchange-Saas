export const COLORS = {
  primary: 'teal',
  secondary: 'blue',
  success: 'green',
  warning: 'orange',
  danger: 'red',
  info: 'cyan',
} as const

export const ROUTES = {
  home: '/',
  dashboard: '/dashboard',
  tables: '/dashboard/tables',
  demo: '/dashboard/demo',
  login: '/auth/login',
  register: '/auth/register',
} as const

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const
