import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분
      gcTime: 1000 * 60 * 30,   // 30분 (이전의 cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
}) 