import { Sidebar } from './Sidebar'
import { BrowserRouter } from 'react-router-dom'
import type { Meta, StoryObj, StoryFn } from '@storybook/react'

type Story = StoryObj<typeof Sidebar>

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  decorators: [(StoryComponent: StoryFn) => (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  )],
}

export default meta

export const Default: Story = {
  render: () => <Sidebar />
} 