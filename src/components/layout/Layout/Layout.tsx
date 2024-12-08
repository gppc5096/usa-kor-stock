import styled from 'styled-components'
import { Header } from '../Header/Header'
import { Sidebar } from '../Sidebar/Sidebar'
import { Footer } from '../Footer/Footer'
import { useLayoutStore } from '../../../stores/layoutStore'

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  margin-left: 240px;
  margin-top: 60px;
  padding: ${({ theme }) => theme.spacing.lg};
  flex: 1;
  background-color: ${({ theme }) => theme.colors[theme.mode].background.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const Overlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 80;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const { isSidebarOpen, closeSidebar } = useLayoutStore()

  return (
    <LayoutWrapper>
      <Header />
      <Sidebar />
      <Overlay isVisible={isSidebarOpen} onClick={closeSidebar} />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  )
} 