import styled from 'styled-components'
import { FiHome, FiTrendingUp, FiList, FiSettings } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'
import { useLayoutStore } from '../../../stores/layoutStore'

interface SidebarWrapperProps {
  isOpen: boolean
}

const SidebarWrapper = styled.aside<SidebarWrapperProps>`
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 240px;
  background-color: ${({ theme }) => theme.colors[theme.mode].background.secondary};
  border-right: 1px solid ${({ theme }) => theme.colors[theme.mode].border.primary};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: transform 0.3s ease-in-out;
  z-index: 90;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  }
`

const NavItem = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: 4px;
  color: ${({ theme, active }) => 
    active 
      ? theme.colors[theme.mode].text.primary 
      : theme.colors[theme.mode].text.secondary
  };
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors[theme.mode].background.tertiary};
    color: ${({ theme }) => theme.colors[theme.mode].text.primary};
  }

  ${({ active, theme }) =>
    active &&
    `
      background-color: ${theme.colors[theme.mode].background.tertiary};
      font-weight: ${theme.typography.weight.medium};
    `}
`

const NavText = styled.span`
  font-size: ${({ theme }) => theme.typography.size.body2};
`

export const Sidebar = () => {
  const location = useLocation()
  const { isSidebarOpen, closeSidebar } = useLayoutStore()

  const navItems = [
    { icon: <FiHome size={20} />, label: '대시보드', path: '/' },
    { icon: <FiTrendingUp size={20} />, label: '주식 현황', path: '/stocks' },
    { icon: <FiList size={20} />, label: '포트폴리오', path: '/portfolio' },
    { icon: <FiSettings size={20} />, label: '설정', path: '/settings' },
  ]

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      closeSidebar()
    }
  }

  return (
    <SidebarWrapper isOpen={isSidebarOpen}>
      {navItems.map((item) => (
        <NavItem 
          key={item.path} 
          to={item.path}
          active={location.pathname === item.path}
          onClick={handleNavClick}
        >
          {item.icon}
          <NavText>{item.label}</NavText>
        </NavItem>
      ))}
    </SidebarWrapper>
  )
} 