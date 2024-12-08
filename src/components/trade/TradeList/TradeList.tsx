import React from 'react'
import styled from 'styled-components'
import { useTradeStore } from '../../../stores/tradeStore'
import { FiTrash2 } from 'react-icons/fi'

const ListWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`

const ListTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.size.h5};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors[theme.mode].background.secondary};
  border-radius: 8px;
  overflow: hidden;
`

const Th = styled.th`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: left;
  background-color: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors[theme.mode].border.primary};
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
`

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors[theme.mode].action.danger};
    background-color: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
  }
`

export const TradeList = () => {
  const { trades, removeTrade } = useTradeStore()

  if (trades.length === 0) {
    return null
  }

  return (
    <ListWrapper>
      <ListTitle>거래 내역</ListTitle>
      <Table>
        <thead>
          <tr>
            <Th>거래일자</Th>
            <Th>국가</Th>
            <Th>티커</Th>
            <Th>종목명</Th>
            <Th>거래유형</Th>
            <Th>수량</Th>
            <Th>단가</Th>
            <Th>총액</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <tr key={index}>
              <Td>{trade.date instanceof Date ? trade.date.toLocaleDateString() : new Date(String(trade.date)).toLocaleDateString()}</Td>
              <Td>{trade.country}</Td>
              <Td>{trade.ticker}</Td>
              <Td>{trade.stockName}</Td>
              <Td style={{ color: trade.type === 'buy' ? '#e53935' : '#43a047' }}>
                {trade.type === 'buy' ? '매수' : '매도'}
              </Td>
              <Td>{trade.quantity.toLocaleString()}</Td>
              <Td>{trade.price.toLocaleString()} {trade.currency}</Td>
              <Td>{(trade.quantity * trade.price).toLocaleString()} {trade.currency}</Td>
              <Td>
                <DeleteButton onClick={() => removeTrade(index)}>
                  <FiTrash2 size={18} />
                </DeleteButton>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ListWrapper>
  )
}