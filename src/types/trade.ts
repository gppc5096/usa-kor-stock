export type TradeType = 'buy' | 'sell'

export interface TradeFormData {
  date: Date
  country: 'KOR' | 'USA'
  brokerId: string
  ticker: string
  stockName: string
  type: TradeType
  quantity: number
  price: number
  currency: 'KRW' | 'USD'
}

export type Country = 'KOR' | 'USA'

export interface Broker {
  id: string
  name: string
  country: Country
} 