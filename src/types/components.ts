export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export type InputSize = 'sm' | 'md' | 'lg'
export type InputVariant = 'outlined' | 'filled'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  size?: InputSize
  variant?: InputVariant
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  helperText?: string
}

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  error?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'outlined' | 'filled'
  fullWidth?: boolean
  options: SelectOption[]
  helperText?: string
}

export interface Column<T> {
  key: Extract<keyof T, string>
  title: string
  width?: string
  render?: (value: T[Extract<keyof T, string>], record: T) => React.ReactNode
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
}

export interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
  loading?: boolean
  onSort?: (key: string, order: 'asc' | 'desc') => void
  sortKey?: string
  sortOrder?: 'asc' | 'desc'
  rowKey?: Extract<keyof T, string> | ((record: T) => string)
  onRowClick?: (record: T) => void
  emptyText?: string
}

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode
  subtitle?: React.ReactNode
  actions?: React.ReactNode
  bordered?: boolean
  hoverable?: boolean
  loading?: boolean
  fullWidth?: boolean
  variant?: 'outlined' | 'filled'
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  closeOnOverlayClick?: boolean
  closeOnEsc?: boolean
  preventScroll?: boolean
} 