import { useQuery } from '@tanstack/react-query'
import { fetchStocks } from '../utils/api'

export const useStocks = () => {
  return useQuery({
    queryKey: ['stocks'],
    queryFn: fetchStocks,
  })
} 