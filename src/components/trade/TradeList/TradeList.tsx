import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useTradeStore } from '../../../stores/tradeStore'
import { Trade, Country } from '../../../types/trade'
import { EditTradeModal } from '../EditTradeModal/EditTradeModal'

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors[theme.mode].background.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 1000px;
`

const Th = styled.th`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors[theme.mode].border.primary};
  white-space: nowrap;
`

const Td = styled.td<{ align?: 'left' | 'right' }>`
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors[theme.mode].border.secondary};
  text-align: ${({ align }) => align || 'left'};
`

const TradeType = styled.span<{ type: 'buy' | 'sell' }>`
  color: ${({ theme, type }) =>
    type === 'buy'
      ? theme.colors[theme.mode].action.danger
      : theme.colors[theme.mode].action.primary};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
`

const formatDate = (date: Date) => {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

const formatNumber = (value: number) => {
  return new Intl.NumberFormat().format(value)
}

const formatCurrency = (value: number, currency: 'KRW' | 'USD') => {
  return currency === 'KRW'
    ? `₩${formatNumber(value)}`
    : `$${formatNumber(value)}`
}

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors[theme.mode].action.danger};
    background-color: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
  }
`

const ActionCell = styled(Td)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-end;
`

const DeleteConfirmModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors[theme.mode].background.primary};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const ModalButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;
`

const FilterContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`

const FilterSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors[theme.mode].border.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors[theme.mode].background.primary};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  min-width: 120px;
`

const SortButton = styled.button<{ isActive?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors[theme.mode].action.primary
      : theme.colors[theme.mode].text.primary};

  &:hover {
    color: ${({ theme }) => theme.colors[theme.mode].action.hover};
  }
`

type SortField = 'date' | 'country' | 'brokerId' | 'type'
type SortDirection = 'asc' | 'desc'

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors[theme.mode].background.secondary};
  border-radius: 8px;
`

const PageButton = styled.button<{ isActive?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  margin: 0 ${({ theme }) => theme.spacing.xs};
  border: 1px solid ${({ theme, isActive }) =>
    isActive
      ? theme.colors[theme.mode].action.primary
      : theme.colors[theme.mode].border.primary};
  border-radius: 4px;
  background-color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors[theme.mode].action.primary
      : theme.colors[theme.mode].background.primary};
  color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors[theme.mode].text.inverse
      : theme.colors[theme.mode].text.primary};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors[theme.mode].action.hover};
    color: ${({ theme }) => theme.colors[theme.mode].text.inverse};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const PageSizeSelect = styled(FilterSelect)`
  margin-left: ${({ theme }) => theme.spacing.md};
`

const PageInfo = styled.span`
  color: ${({ theme }) => theme.colors[theme.mode].text.secondary};
`

export const TradeList = () => {
  const { trades, deleteTrade, updateTrade } = useTradeStore()
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [filters, setFilters] = useState({
    country: '' as Country | '',
    brokerId: '',
    type: '' as 'buy' | 'sell' | '',
  })
  const [sortConfig, setSortConfig] = useState<{
    field: SortField
    direction: SortDirection
  }>({
    field: 'date',
    direction: 'desc',
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [editingTrade, setEditingTrade] = useState<Trade | null>(null)

  const handleEdit = (trade: Trade) => {
    setEditingTrade(trade)
  }

  const handleUpdate = (id: number, updatedTrade: Omit<Trade, 'id'>) => {
    updateTrade(id, updatedTrade)
    setEditingTrade(null)
  }

  const handleDelete = (id: number) => {
    setDeleteId(id)
  }

  const confirmDelete = () => {
    if (deleteId !== null) {
      deleteTrade(deleteId)
      setDeleteId(null)
    }
  }

  const cancelDelete = () => {
    setDeleteId(null)
  }

  const handleSort = (field: SortField) => {
    setSortConfig((prev) => ({
      field,
      direction:
        prev.field === field && prev.direction === 'asc' ? 'desc' : 'asc',
    }))
  }

  const filteredAndSortedTrades = useMemo(() => {
    let result = [...trades]

    // 필터링
    if (filters.country) {
      result = result.filter((trade) => trade.country === filters.country)
    }
    if (filters.brokerId) {
      result = result.filter((trade) => trade.brokerId === filters.brokerId)
    }
    if (filters.type) {
      result = result.filter((trade) => trade.type === filters.type)
    }

    // 정렬
    result.sort((a, b) => {
      const direction = sortConfig.direction === 'asc' ? 1 : -1
      switch (sortConfig.field) {
        case 'date':
          return (a.date.getTime() - b.date.getTime()) * direction
        case 'country':
          return a.country.localeCompare(b.country) * direction
        case 'brokerId':
          return a.brokerId.localeCompare(b.brokerId) * direction
        case 'type':
          return a.type.localeCompare(b.type) * direction
        default:
          return 0
      }
    })

    return result
  }, [trades, filters, sortConfig])

  const uniqueBrokers = useMemo(
    () => [...new Set(trades.map((trade) => trade.brokerId))],
    [trades]
  )

  const paginatedTrades = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    return filteredAndSortedTrades.slice(startIndex, startIndex + pageSize)
  }, [filteredAndSortedTrades, currentPage, pageSize])

  const totalPages = Math.ceil(filteredAndSortedTrades.length / pageSize)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = Number(e.target.value)
    setPageSize(newPageSize)
    setCurrentPage(1) // 페이지 크기가 변경되면 첫 페이지로 이동
  }

  return (
    <>
      <FilterContainer>
        <FilterSelect
          value={filters.country}
          onChange={(e) => setFilters({ ...filters, country: e.target.value as Country })}
        >
          <option value="">모든 국가</option>
          <option value="KOR">한국</option>
          <option value="USA">미국</option>
        </FilterSelect>

        <FilterSelect
          value={filters.brokerId}
          onChange={(e) => setFilters({ ...filters, brokerId: e.target.value })}
        >
          <option value="">모든 증권사</option>
          {uniqueBrokers.map((broker) => (
            <option key={broker} value={broker}>
              {broker}
            </option>
          ))}
        </FilterSelect>

        <FilterSelect
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value as 'buy' | 'sell' | '' })}
        >
          <option value="">모든 거래</option>
          <option value="buy">매수</option>
          <option value="sell">매도</option>
        </FilterSelect>
      </FilterContainer>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>
                <SortButton
                  onClick={() => handleSort('date')}
                  isActive={sortConfig.field === 'date'}
                >
                  거래일자 {sortConfig.field === 'date' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </SortButton>
              </Th>
              <Th>
                <SortButton
                  onClick={() => handleSort('country')}
                  isActive={sortConfig.field === 'country'}
                >
                  국가 {sortConfig.field === 'country' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </SortButton>
              </Th>
              <Th>
                <SortButton
                  onClick={() => handleSort('brokerId')}
                  isActive={sortConfig.field === 'brokerId'}
                >
                  증권사 {sortConfig.field === 'brokerId' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </SortButton>
              </Th>
              <Th>
                <SortButton
                  onClick={() => handleSort('type')}
                  isActive={sortConfig.field === 'type'}
                >
                  거래유형 {sortConfig.field === 'type' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </SortButton>
              </Th>
              <Th align="right">수량</Th>
              <Th align="right">단가</Th>
              <Th align="right">총액</Th>
              <Th>작업</Th>
            </tr>
          </thead>
          <tbody>
            {paginatedTrades.map((trade) => (
              <tr key={trade.id}>
                <Td>{formatDate(trade.date)}</Td>
                <Td>{trade.country}</Td>
                <Td>{trade.brokerId}</Td>
                <Td>
                  <TradeType type={trade.type}>
                    {trade.type === 'buy' ? '매수' : '매도'}
                  </TradeType>
                </Td>
                <Td align="right">{formatNumber(trade.quantity)}</Td>
                <Td align="right">
                  {formatCurrency(trade.price, trade.currency)}
                </Td>
                <Td align="right">
                  {formatCurrency(trade.quantity * trade.price, trade.currency)}
                </Td>
                <ActionCell>
                  <ActionButton onClick={() => handleEdit(trade)}>
                    수정
                  </ActionButton>
                  <ActionButton onClick={() => handleDelete(trade.id)}>
                    삭제
                  </ActionButton>
                </ActionCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableWrapper>

      <PaginationContainer>
        <div>
          <PageInfo>
            전체 {filteredAndSortedTrades.length}건 중{' '}
            {(currentPage - 1) * pageSize + 1}-
            {Math.min(currentPage * pageSize, filteredAndSortedTrades.length)}건
          </PageInfo>
          <PageSizeSelect value={pageSize} onChange={handlePageSizeChange}>
            <option value={10}>10개씩 보기</option>
            <option value={20}>20개씩 보기</option>
            <option value={50}>50개씩 보기</option>
          </PageSizeSelect>
        </div>
        
        <div>
          <PageButton
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            {'<<'}
          </PageButton>
          <PageButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {'<'}
          </PageButton>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            let pageNum = currentPage - 2 + i
            if (pageNum <= 0) pageNum += 5
            if (pageNum > totalPages) pageNum -= 5
            if (pageNum > 0 && pageNum <= totalPages) {
              return (
                <PageButton
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  isActive={currentPage === pageNum}
                >
                  {pageNum}
                </PageButton>
              )
            }
            return null
          })}
          
          <PageButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </PageButton>
          <PageButton
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            {'>>'}
          </PageButton>
        </div>
      </PaginationContainer>

      {deleteId !== null && (
        <>
          <ModalOverlay />
          <DeleteConfirmModal>
            <h3>거래 내역 삭제</h3>
            <p>정말로 이 거래 내역을 삭제하시겠습니까?</p>
            <ModalButtons>
              <ActionButton onClick={cancelDelete}>취소</ActionButton>
              <ActionButton onClick={confirmDelete}>삭제</ActionButton>
            </ModalButtons>
          </DeleteConfirmModal>
        </>
      )}

      {editingTrade && (
        <EditTradeModal
          trade={editingTrade}
          onClose={() => setEditingTrade(null)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  )
}