export type Country = 'KOR' | 'USA'
export type Currency = 'KRW' | 'USD'
export type TradeType = 'buy' | 'sell'

export interface Broker {
  id: string
  name: string
  country: Country
}

export interface Trade {
  id: number
  date: Date
  country: Country
  brokerId: string
  ticker: string
  stockName: string
  type: TradeType
  quantity: number
  price: number
  currency: Currency
}

export type TradeFormData = Omit<Trade, 'id'> 