import { Button } from './Button'
import { FiPlus, FiTrash2 } from 'react-icons/fi'

export default {
  title: 'Components/Button',
  component: Button,
}

export const Primary = () => <Button>Primary Button</Button>
export const Secondary = () => <Button variant="secondary">Secondary Button</Button>
export const Danger = () => <Button variant="danger">Danger Button</Button>
export const Ghost = () => <Button variant="ghost">Ghost Button</Button>

export const WithIcons = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <Button leftIcon={<FiPlus />}>Add Item</Button>
    <Button variant="danger" rightIcon={<FiTrash2 />}>Delete</Button>
  </div>
)

export const Loading = () => <Button isLoading>Loading Button</Button>
export const Disabled = () => <Button disabled>Disabled Button</Button>
export const FullWidth = () => <Button fullWidth>Full Width Button</Button> 