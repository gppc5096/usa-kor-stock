import styled, { css } from 'styled-components'
import { TableProps } from '../../../types/components'
import { FiChevronUp, FiChevronDown } from 'react-icons/fi'

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  border: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
  border-radius: 4px;
`

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ theme }) => theme.colors[theme.mode].surface};
`

const Th = styled.th<{ align?: string; width?: string | number }>`
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors[theme.mode].surfaceAlt};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  text-align: ${({ align }) => align || 'left'};
  ${({ width }) => width && `width: ${width};`}
  white-space: nowrap;
  user-select: none;
`

const Td = styled.td<{ align?: string }>`
  padding: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors[theme.mode].border};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  text-align: ${({ align }) => align || 'left'};
`

const SortIcon = styled.span`
  display: inline-flex;
  margin-left: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors[theme.mode].text.tertiary};
`

const EmptyRow = styled.tr`
  td {
    text-align: center;
    padding: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors[theme.mode].text.tertiary};
  }
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

const ClickableRow = styled.tr<{ clickable?: boolean }>`
  ${({ clickable }) =>
    clickable &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => theme.colors[theme.mode].surfaceAlt};
      }
    `}
`

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  loading,
  onSort,
  sortKey,
  sortOrder,
  rowKey,
  onRowClick,
  emptyText = '데이터가 없습니다.',
}: TableProps<T>) {
  const handleSort = (key: string) => {
    if (!onSort) return
    const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc'
    onSort(key, newOrder)
  }

  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') return rowKey(record)
    if (typeof rowKey === 'string') return String(record[rowKey])
    return index.toString()
  }

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <Th
                key={column.key}
                align={column.align}
                width={column.width}
                onClick={() => column.sortable && handleSort(column.key)}
                style={{ cursor: column.sortable ? 'pointer' : 'default' }}
              >
                {column.title}
                {column.sortable && sortKey === column.key && (
                  <SortIcon>
                    {sortOrder === 'asc' ? <FiChevronUp /> : <FiChevronDown />}
                  </SortIcon>
                )}
              </Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <EmptyRow>
              <td colSpan={columns.length}>{emptyText}</td>
            </EmptyRow>
          ) : (
            data.map((record, index) => (
              <ClickableRow
                key={getRowKey(record, index)}
                clickable={!!onRowClick}
                onClick={() => onRowClick?.(record)}
              >
                {columns.map((column) => (
                  <Td key={column.key} align={column.align}>
                    {column.render
                      ? column.render(record[column.key], record)
                      : String(record[column.key])}
                  </Td>
                ))}
              </ClickableRow>
            ))
          )}
        </tbody>
      </StyledTable>
      {loading && (
        <LoadingOverlay>
          <span>Loading...</span>
        </LoadingOverlay>
      )}
    </TableWrapper>
  )
} 