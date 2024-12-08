import React from 'react'
import styled from 'styled-components'
import { TradeForm } from '../components/trade/TradeForm/TradeForm'
import { TradeList } from '../components/trade/TradeList/TradeList'
import { useTradeStore } from '../stores/tradeStore'
import { TradeFormData } from '../types/trade'

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.size.h3};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const TradePage = () => {
  const { addTrade } = useTradeStore()

  const handleSubmit = (data: TradeFormData) => {
    addTrade(data)
  }

  return (
    <PageWrapper>
      <PageTitle>거래 관리</PageTitle>
      <TradeForm onSubmit={handleSubmit} />
      <TradeList />
    </PageWrapper>
  )
} 