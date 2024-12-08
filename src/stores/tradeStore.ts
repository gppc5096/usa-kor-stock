import { create } from 'zustand'
import { Trade } from '../types/trade'

interface TradeStore {
  trades: Trade[]
  addTrade: (trade: Omit<Trade, 'id'>) => void
  updateTrade: (id: number, trade: Omit<Trade, 'id'>) => void
  deleteTrade: (id: number) => void
}

export const useTradeStore = create<TradeStore>((set) => ({
  trades: [],
  addTrade: (trade) =>
    set((state) => ({
      trades: [...state.trades, { ...trade, id: state.trades.length + 1 }],
    })),
  updateTrade: (id, updatedTrade) =>
    set((state) => ({
      trades: state.trades.map((trade) =>
        trade.id === id ? { ...updatedTrade, id } : trade
      ),
    })),
  deleteTrade: (id) =>
    set((state) => ({
      trades: state.trades.filter((trade) => trade.id !== id),
    })),
})) 