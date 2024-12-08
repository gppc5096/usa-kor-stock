import { useThemeStore } from '../../store/themeStore'

export const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useThemeStore()

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '라이트 모드' : '다크 모드'}
    </button>
  )
} 