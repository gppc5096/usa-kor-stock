import styled, { css } from 'styled-components'
import { InputProps } from '../../../types/components'

const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: inline-flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`

const Label = styled.label`
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
  font-size: ${({ theme }) => theme.typography.size.body2};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const IconWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors[theme.mode].text.tertiary};
  
  &.left {
    left: ${({ theme }) => theme.spacing.sm};
  }
  
  &.right {
    right: ${({ theme }) => theme.spacing.sm};
  }
`

const StyledInput = styled.input<InputProps>`
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors[theme.mode].border.primary};
  transition: all 0.2s ease-in-out;
  
  /* Size Variants */
  ${({ size = 'md' }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: ${({ theme }) => theme.spacing.xs};
          font-size: ${({ theme }) => theme.typography.size.body2};
        `
      case 'lg':
        return css`
          padding: ${({ theme }) => theme.spacing.sm};
          font-size: ${({ theme }) => theme.typography.size.body1};
        `
      default:
        return css`
          padding: ${({ theme }) => theme.spacing.sm};
          font-size: ${({ theme }) => theme.typography.size.body1};
        `
    }
  }}

  /* Style Variants */
  ${({ variant = 'outlined', theme }) => {
    const colors = theme.colors[theme.mode]
    switch (variant) {
      case 'filled':
        return css`
          background-color: ${colors.background.tertiary};
          &:focus {
            background-color: ${colors.background.secondary};
          }
        `
      default:
        return css`
          background-color: ${colors.background.secondary};
        `
    }
  }}

  /* Icon Padding */
  ${({ leftIcon }) =>
    leftIcon &&
    css`
      padding-left: ${({ theme }) => theme.spacing.xl};
    `}
  ${({ rightIcon }) =>
    rightIcon &&
    css`
      padding-right: ${({ theme }) => theme.spacing.xl};
    `}

  /* Error State */
  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.colors[theme.mode].action.danger};
    `}

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors[theme.mode].action.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors[theme.mode].action.primary}33;
  }
`

const HelperText = styled.span<{ error?: string }>`
  font-size: ${({ theme }) => theme.typography.size.caption};
  color: ${({ theme, error }) =>
    error
      ? theme.colors[theme.mode].action.danger
      : theme.colors[theme.mode].text.tertiary};
`

export const Input = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  fullWidth,
  ...props
}: InputProps) => {
  return (
    <InputWrapper fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <InputContainer>
        {leftIcon && <IconWrapper className="left">{leftIcon}</IconWrapper>}
        <StyledInput
          error={error}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          {...props}
        />
        {rightIcon && <IconWrapper className="right">{rightIcon}</IconWrapper>}
      </InputContainer>
      {(helperText || error) && (
        <HelperText error={error}>{error || helperText}</HelperText>
      )}
    </InputWrapper>
  )
} 