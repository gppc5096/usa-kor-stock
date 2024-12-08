import styled, { css } from 'styled-components'
import { SelectProps } from '../../../types/components'
import { FiChevronDown } from 'react-icons/fi'

const SelectWrapper = styled.div<{ fullWidth?: boolean }>`
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

const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

type StyledSelectProps = Omit<SelectProps, 'options' | 'helperText' | 'label' | 'fullWidth'>

const StyledSelect = styled.select<StyledSelectProps>`
  width: 100%;
  appearance: none;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors[theme.mode].border.primary};
  transition: all 0.2s ease-in-out;
  padding-right: ${({ theme }) => theme.spacing.xl};
  cursor: pointer;
  
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

const ChevronIcon = styled(FiChevronDown)`
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors[theme.mode].text.tertiary};
  pointer-events: none;
`

const HelperText = styled.span<{ error?: string }>`
  font-size: ${({ theme }) => theme.typography.size.caption};
  color: ${({ theme, error }) =>
    error
      ? theme.colors[theme.mode].action.danger
      : theme.colors[theme.mode].text.tertiary};
`

export const Select = ({
  label,
  error,
  helperText,
  options,
  fullWidth,
  ...props
}: SelectProps) => {
  return (
    <SelectWrapper fullWidth={fullWidth}>
      {label && <Label>{label}</Label>}
      <SelectContainer>
        <StyledSelect error={error} {...props}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <ChevronIcon />
      </SelectContainer>
      {(helperText || error) && (
        <HelperText error={error}>{error || helperText}</HelperText>
      )}
    </SelectWrapper>
  )
} 