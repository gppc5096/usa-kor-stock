import { Select } from './Select'

export default {
  title: 'Components/Select',
  component: Select,
}

const countries = [
  { value: '', label: 'Select country' },
  { value: 'KOR', label: '한국' },
  { value: 'USA', label: '미국' },
  { value: 'JPN', label: '일본' },
  { value: 'CHN', label: '중국' },
]

export const Default = () => (
  <Select options={countries} defaultValue="" />
)

export const WithLabel = () => (
  <Select
    label="Country"
    options={countries}
    defaultValue=""
  />
)

export const WithHelperText = () => (
  <Select
    label="Country"
    options={countries}
    helperText="Please select your country"
    defaultValue=""
  />
)

export const WithError = () => (
  <Select
    label="Country"
    options={countries}
    error="Country selection is required"
    defaultValue=""
  />
)

export const Sizes = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Select size="sm" options={countries} defaultValue="" />
    <Select size="md" options={countries} defaultValue="" />
    <Select size="lg" options={countries} defaultValue="" />
  </div>
)

export const Variants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Select variant="outlined" options={countries} defaultValue="" />
    <Select variant="filled" options={countries} defaultValue="" />
  </div>
)

export const FullWidth = () => (
  <Select fullWidth options={countries} defaultValue="" />
) 