import styled, { css } from 'styled-components'
import { CardProps } from '../../../types/components'

const StyledCard = styled.div<CardProps>`
  background-color: ${({ theme, variant }) =>
    variant === 'filled'
      ? theme.colors[theme.mode].surfaceAlt
      : theme.colors[theme.mode].surface};
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  ${({ bordered, theme }) =>
    bordered &&
    css`
      border: 1px solid ${theme.colors[theme.mode].border};
    `}

  ${({ hoverable, theme }) =>
    hoverable &&
    css`
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px ${theme.colors[theme.mode].border}66;
      }
    `}

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`

const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
`

const Title = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  font-size: ${({ theme }) => theme.typography.size.h5};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`

const Subtitle = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
  font-size: ${({ theme }) => theme.typography.size.body2};
`

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`

const CardActions = styled.div`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-top: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.sm};
`

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors[theme.mode].surface}99;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Card = ({
  title,
  subtitle,
  actions,
  children,
  loading,
  ...props
}: CardProps) => {
  return (
    <StyledCard {...props}>
      {(title || subtitle) && (
        <CardHeader>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
      {loading && (
        <LoadingOverlay>
          <span>Loading...</span>
        </LoadingOverlay>
      )}
    </StyledCard>
  )
} 