import axios, { AxiosError } from 'axios'
import { StockData } from '../types/api'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
})

export const fetchStocks = async (): Promise<StockData[]> => {
  try {
    const { data } = await api.get<StockData[]>('/stocks')
    return data
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.message || 'Failed to fetch stocks')
    }
    throw new Error('An unexpected error occurred')
  }
} 