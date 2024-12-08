export interface StockData {
  id: string;
  date: string;
  country: 'KOR' | 'USA';
  broker: string;
  ticker: string;
  stockName: string;
  type: 'buy' | 'sell';
  quantity: number;
  unitPrice: number;
}

export interface ApiError {
  code: string;
  message: string;
} 