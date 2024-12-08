import styled, { css } from 'styled-components'
import { ButtonProps } from '../../../types/components'

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  border-radius: 4px;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  transition: all 0.2s ease-in-out;
  
  /* Size Variants */
  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
          font-size: ${({ theme }) => theme.typography.size.body2};
        `
      case 'lg':
        return css`
          padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
          font-size: ${({ theme }) => theme.typography.size.body1};
        `
      default:
        return css`
          padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
          font-size: ${({ theme }) => theme.typography.size.body1};
        `
    }
  }}

  /* Style Variants */
  ${({ variant = 'primary', theme }) => {
    const colors = theme.colors[theme.mode]
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${colors.action.secondary};
          color: ${colors.text.inverse};
          &:hover {
            background-color: ${colors.action.hover};
          }
        `
      case 'danger':
        return css`
          background-color: ${colors.action.primary};
          color: ${colors.text.inverse};
          &:hover {
            opacity: 0.9;
          }
        `
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${colors.text.primary};
          border: 1px solid ${colors.border.primary};
          &:hover {
            background-color: ${colors.background.tertiary};
          }
        `
      default:
        return css`
          background-color: ${colors.action.primary};
          color: ${colors.text.inverse};
          &:hover {
            background-color: ${colors.action.hover};
          }
        `
    }
  }}

  /* Full Width */
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

  /* Disabled State */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const LoadingSpinner = styled.span`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
`

export const Button = ({
  children,
  isLoading,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton disabled={isLoading || disabled} {...props}>
      {isLoading && <LoadingSpinner />}
      {!isLoading && leftIcon}
      {children}
      {!isLoading && rightIcon}
    </StyledButton>
  )
} 