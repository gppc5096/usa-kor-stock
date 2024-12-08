import React from 'react'
import styled from 'styled-components'
import { Trade } from '../../../types/trade'
import { TradeForm } from '../TradeForm/TradeForm'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors[theme.mode].background.primary};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
  
  &:hover {
    color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  }
`

interface EditTradeModalProps {
  trade: Trade
  onClose: () => void
  onUpdate: (id: number, trade: Omit<Trade, 'id'>) => void
}

export const EditTradeModal = ({ trade, onClose, onUpdate }: EditTradeModalProps) => {
  const handleSubmit = (updatedTrade: Omit<Trade, 'id'>) => {
    onUpdate(trade.id, updatedTrade)
    onClose()
  }

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>거래 내역 수정</h2>
        <TradeForm initialData={trade} onSubmit={handleSubmit} isEdit />
      </ModalContent>
    </>
  )
} 