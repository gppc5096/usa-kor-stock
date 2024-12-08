import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

interface StockChartProps {
  data: {
    date: string;
    value: number;
  }[];
  width?: number;
  height?: number;
}

export const StockLineChart = ({ data, width = 600, height = 400 }: StockChartProps) => {
  return (
    <LineChart width={width} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  )
} 