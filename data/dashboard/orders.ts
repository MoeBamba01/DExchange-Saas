import { 
  faArrowUp,
  faShoppingCart,
  faWallet,
  faFileInvoice
} from '@fortawesome/free-solid-svg-icons'
import { Order } from '@/lib/types'

export const dashboardOrders: Order[] = [
  {
    title: '$2400, Design changes',
    date: '22 DEC 7:20 PM',
    icon: faArrowUp,
    color: 'text-green-500',
  },
  {
    title: 'New order #4219423',
    date: '21 DEC 11:21 PM',
    icon: faShoppingCart,
    color: 'text-red-500',
  },
  {
    title: 'Server Payments for April',
    date: '21 DEC 9:28 PM',
    icon: faWallet,
    color: 'text-blue-500',
  },
  {
    title: 'New card added for order #3210145',
    date: '20 DEC 3:52 PM',
    icon: faFileInvoice,
    color: 'text-orange-500',
  },
]
