import { Input } from './Input'
import { FiMail, FiLock, FiSearch } from 'react-icons/fi'

export default {
  title: 'Components/Input',
  component: Input,
}

export const Default = () => <Input placeholder="Enter text" />
export const WithLabel = () => <Input label="Email" placeholder="Enter email" />
export const WithHelperText = () => (
  <Input
    label="Password"
    type="password"
    helperText="Must be at least 8 characters"
  />
)

export const WithError = () => (
  <Input
    label="Email"
    value="invalid-email"
    error="Please enter a valid email address"
  />
)

export const WithIcons = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Input leftIcon={<FiMail />} placeholder="Enter email" />
    <Input
      leftIcon={<FiLock />}
      type="password"
      placeholder="Enter password"
    />
    <Input
      leftIcon={<FiSearch />}
      rightIcon={<FiSearch />}
      placeholder="Search..."
    />
  </div>
)

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Input size="sm" placeholder="Small input" />
    <Input size="md" placeholder="Medium input" />
    <Input size="lg" placeholder="Large input" />
  </div>
)

export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Input variant="outlined" placeholder="Outlined input" />
    <Input variant="filled" placeholder="Filled input" />
  </div>
)

export const FullWidth = () => (
  <Input fullWidth placeholder="Full width input" />
) 