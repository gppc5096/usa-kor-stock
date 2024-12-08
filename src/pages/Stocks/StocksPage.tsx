import React from 'react'
import styled from 'styled-components'
import { TradeForm } from '../../components/trade/TradeForm/TradeForm'
import { TradeList } from '../../components/trade/TradeList/TradeList'

const PageWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.size.h3};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const StocksPage = () => {
  return (
    <PageWrapper>
      <PageTitle>주식 거래</PageTitle>
      <TradeForm />
      <TradeList />
    </PageWrapper>
  )
} 