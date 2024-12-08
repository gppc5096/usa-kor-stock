import React, { useState } from 'react'
import styled from 'styled-components'
import { Trade, TradeFormData, Country, Broker, TradeType } from '../../../types/trade'
import { Input } from '../../common/Input/Input'
import { Select } from '../../common/Select/Select'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors[theme.mode].background.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.h4};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.size.body2};
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
`

const countryOptions = [
  { value: 'KOR', label: '한국' },
  { value: 'USA', label: '미국' },
]

const brokers: Broker[] = [
  { id: 'kb', name: 'KB증권', country: 'KOR' },
  { id: 'samsung', name: '삼성증권', country: 'KOR' },
  { id: 'kiwoom', name: '키움증권', country: 'KOR' },
  { id: 'schwab', name: '찰스슈왑', country: 'USA' },
  { id: 'fidelity', name: '피델리티', country: 'USA' },
  { id: 'td', name: 'TD Ameritrade', country: 'USA' },
]

const tradeTypeOptions = [
  { value: 'buy', label: '매수' },
  { value: 'sell', label: '매도' },
]

const formatNumber = (value: number) => {
  return new Intl.NumberFormat().format(value)
}

const extractNumber = (value: string) => {
  return value.replace(/[^\d.]/g, '')
}

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors[theme.mode].action.primary};
  color: ${({ theme }) => theme.colors[theme.mode].text.inverse};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors[theme.mode].action.hover};
  }
`

const StyledInput = styled(Input)`
  color: #4d4d4d;
  
  &[type="date"] {
    position: relative;
    padding-right: 35px;
    z-index: 1;
  }

  &[type="date"]::-webkit-calendar-picker-indicator {
    display: block;
    background: transparent;
    cursor: pointer;
    position: absolute;
    right: 10px;
    width: 20px;
    height: 20px;
    opacity: 1;
    z-index: 2;
  }
`

const StyledSelect = styled(Select)`
  color: #4d4d4d;
`

interface TradeFormProps {
  initialData?: Trade
  onSubmit?: (data: TradeFormData) => void
  isEdit?: boolean
}

export const TradeForm = ({ 
  initialData, 
  onSubmit = () => {},
  isEdit = false 
}: TradeFormProps) => {
  const [formData, setFormData] = useState<TradeFormData>(
    initialData || {
      date: new Date(),
      country: 'KOR',
      brokerId: '',
      ticker: '',
      stockName: '',
      type: 'buy',
      quantity: 0,
      price: 0,
      currency: 'KRW',
    }
  )

  const handleChange = (
    name: keyof TradeFormData,
    value: string | number | Date | Country
  ) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'country' && {
        currency: value === 'KOR' ? 'KRW' : 'USD',
        brokerId: '',
      }),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    console.log('Form submitted:', formData)
  }

  const filteredBrokers = brokers
    .filter(broker => broker.country === formData.country)
    .map(broker => ({
      value: broker.id,
      label: broker.name
    }))

  const handleNumberChange = (
    name: 'quantity' | 'price',
    value: string
  ) => {
    const numberValue = parseFloat(extractNumber(value))
    handleChange(name, isNaN(numberValue) ? 0 : numberValue)
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormTitle>{isEdit ? '거래 수정' : '거래 입력'}</FormTitle>
      
      <FormRow>
        <FormGroup>
          <Label htmlFor="date">거래일</Label>
          <StyledInput
            type="date"
            id="date"
            value={formData.date.toISOString().split('T')[0]}
            onChange={(e) => handleChange('date', new Date(e.target.value))}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="country">국가</Label>
          <StyledSelect
            id="country"
            value={formData.country}
            onChange={(e) => handleChange('country', e.target.value as Country)}
            options={countryOptions}
            required
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <Label htmlFor="broker">증권사</Label>
          <StyledSelect
            id="broker"
            value={formData.brokerId}
            onChange={(e) => handleChange('brokerId', e.target.value)}
            options={filteredBrokers}
            required
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <Label htmlFor="ticker">티커</Label>
          <StyledInput
            type="text"
            id="ticker"
            value={formData.ticker}
            onChange={(e) => handleChange('ticker', e.target.value.toUpperCase())}
            placeholder={formData.country === 'KOR' ? '예: 005930' : '예: AAPL'}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="stockName">종목명</Label>
          <StyledInput
            type="text"
            id="stockName"
            value={formData.stockName}
            onChange={(e) => handleChange('stockName', e.target.value)}
            placeholder={formData.country === 'KOR' ? '예: 삼성전자' : '예: Apple Inc.'}
            required
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <Label htmlFor="type">거래 유형</Label>
          <StyledSelect
            id="type"
            value={formData.type}
            onChange={(e) => handleChange('type', e.target.value as TradeType)}
            options={tradeTypeOptions}
            required
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <Label htmlFor="quantity">수량</Label>
          <StyledInput
            type="text"
            id="quantity"
            value={formatNumber(formData.quantity)}
            onChange={(e) => handleNumberChange('quantity', e.target.value)}
            placeholder="0"
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="price">단가 ({formData.currency})</Label>
          <StyledInput
            type="text"
            id="price"
            value={formatNumber(formData.price)}
            onChange={(e) => handleNumberChange('price', e.target.value)}
            placeholder="0"
            required
          />
        </FormGroup>
      </FormRow>

      <FormRow>
        <FormGroup>
          <SubmitButton type="submit">
            {isEdit ? '수정' : '저장'}
          </SubmitButton>
        </FormGroup>
      </FormRow>
    </FormWrapper>
  )
} 