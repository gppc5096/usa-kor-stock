import { Table } from './Table'
import { useState } from 'react'
import { Column } from '../../../types/components'

export default {
  title: 'Components/Table',
  component: Table,
}

interface User extends Record<string, unknown> {
  id: string
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
}

const mockData: User[] = [
  {
    id: '1',
    name: '김철수',
    email: 'kim@example.com',
    role: '관리자',
    status: 'active',
  },
  {
    id: '2',
    name: '이영희',
    email: 'lee@example.com',
    role: '사용자',
    status: 'active',
  },
  {
    id: '3',
    name: '박지민',
    email: 'park@example.com',
    role: '사용자',
    status: 'inactive',
  },
]

const columns: Column<User>[] = [
  { key: 'name', title: '이름', width: '20%' },
  { key: 'email', title: '이메일', width: '30%' },
  { key: 'role', title: '역할', width: '20%' },
  {
    key: 'status',
    title: '상태',
    width: '20%',
    render: (_, record) => (
      <span style={{ color: record.status === 'active' ? 'green' : 'red' }}>
        {record.status === 'active' ? '활성' : '비활성'}
      </span>
    )
  },
]

export const Default = () => <Table<User> columns={columns} data={mockData} />

export const Sortable = () => {
  const [sortKey, setSortKey] = useState<string>('')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const handleSort = (key: string, order: 'asc' | 'desc') => {
    setSortKey(key)
    setSortOrder(order)
  }

  const sortableColumns = columns.map(col => ({
    ...col,
    sortable: true
  }))

  return (
    <Table<User>
      columns={sortableColumns}
      data={mockData}
      onSort={handleSort}
      sortKey={sortKey}
      sortOrder={sortOrder}
    />
  )
}

export const Loading = () => <Table<User> columns={columns} data={mockData} loading />

export const Empty = () => <Table<User> columns={columns} data={[]} />

export const Clickable = () => (
  <Table<User>
    columns={columns}
    data={mockData}
    onRowClick={(record) => alert(`Clicked: ${record.name}`)}
  />
) 