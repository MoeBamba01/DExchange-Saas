import { 
  faWallet, 
  faUsers, 
  faFileInvoice, 
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import { Stat } from '@/lib/types'

export const dashboardStats: Stat[] = [
  {
    title: "Today's Money",
    value: '$53,000',
    change: '+55%',
    icon: faWallet,
    color: 'bg-teal-400'
  },
  {
    title: "Today's Users",
    value: '2,300',
    change: '+5%',
    icon: faUsers,
    color: 'bg-teal-400'
  },
  {
    title: 'New Clients',
    value: '+3,052',
    change: '-14%',
    icon: faFileInvoice,
    color: 'bg-teal-400'
  },
  {
    title: 'Total Sales',
    value: '$173,000',
    change: '+8%',
    icon: faShoppingCart,
    color: 'bg-teal-400'
  },
]
