import { Layout } from './Layout'
import { BrowserRouter } from 'react-router-dom'
import type { Meta, StoryObj, StoryFn } from '@storybook/react'

type Story = StoryObj<typeof Layout>

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  decorators: [(StoryComponent: StoryFn) => (
    <BrowserRouter>
      <StoryComponent />
    </BrowserRouter>
  )],
}

export default meta

export const Default: Story = {
  render: () => (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>메인 콘텐츠</h1>
        <p>여기에 페이지 콘텐츠가 들어갑니다.</p>
      </div>
    </Layout>
  ),
} 