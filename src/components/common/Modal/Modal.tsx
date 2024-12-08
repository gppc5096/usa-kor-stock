import { useEffect } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { ModalProps } from '../../../types/components'
import { FiX } from 'react-icons/fi'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s ease-in-out;
`

const ModalContainer = styled.div<{ size?: string }>`
  background-color: ${({ theme }) => theme.colors[theme.mode].surface};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${slideIn} 0.3s ease-in-out;
  max-height: 90vh;
  display: flex;
  flex-direction: column;

  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return css`
          width: 400px;
        `
      case 'lg':
        return css`
          width: 800px;
        `
      default:
        return css`
          width: 600px;
        `
    }
  }}
`

const ModalHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  font-size: ${({ theme }) => theme.typography.size.h5};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors[theme.mode].text.tertiary};
  padding: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  }
`

const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;
`

const ModalFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  preventScroll = true,
}: ModalProps) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEsc) {
        onClose()
      }
    }

    if (isOpen) {
      if (preventScroll) {
        document.body.style.overflow = 'hidden'
      }
      document.addEventListener('keydown', handleEsc)
    }

    return () => {
      if (preventScroll) {
        document.body.style.overflow = 'unset'
      }
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose, closeOnEsc, preventScroll])

  if (!isOpen) return null

  return (
    <Overlay
      isOpen={isOpen}
      onClick={(e) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <ModalContainer size={size}>
        <ModalHeader>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>
            <FiX size={20} />
          </CloseButton>
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </Overlay>
  )
} 