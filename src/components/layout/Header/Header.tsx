import styled from 'styled-components'
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'
import { useThemeStore } from '../../../stores/themeStore'
import { useLayoutStore } from '../../../stores/layoutStore'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: ${({ theme }) => `0 ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors[theme.mode].background.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors[theme.mode].border.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.size.h5};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
  }
`

const MenuButton = styled(ThemeToggle)`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

export const Header = () => {
  const { mode, toggleTheme } = useThemeStore()
  const { toggleSidebar } = useLayoutStore()

  return (
    <HeaderWrapper>
      <Logo>USA-KOR Stock</Logo>
      <Actions>
        <MenuButton onClick={toggleSidebar}>
          <FiMenu size={20} />
        </MenuButton>
        <ThemeToggle onClick={toggleTheme}>
          {mode === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
        </ThemeToggle>
      </Actions>
    </HeaderWrapper>
  )
} 