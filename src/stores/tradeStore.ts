import { create } from 'zustand'
import { TradeFormData } from '../types/trade'

interface TradeStore {
  trades: TradeFormData[]
  addTrade: (trade: TradeFormData) => void
  removeTrade: (index: number) => void
}

export const useTradeStore = create<TradeStore>((set) => ({
  trades: [],
  addTrade: (trade) => 
    set((state) => ({ 
      trades: [...state.trades, trade] 
    })),
  removeTrade: (index) =>
    set((state) => ({
      trades: state.trades.filter((_, i) => i !== index)
    })),
})) 