import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components'
import { queryClient } from './lib/queryClient'
import { useThemeStore } from './store/themeStore'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  const [count, setCount] = useState(0)
  const darkMode = useThemeStore((state) => state.darkMode)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{
        ...theme,
        mode: darkMode ? 'dark' : 'light'
      }}>
        <GlobalStyle />
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div style={{ 
          backgroundColor: darkMode ? theme.colors.dark.background : theme.colors.light.background,
          color: darkMode ? theme.colors.dark.text.main : theme.colors.light.text.main
        }}>
          안녕하세요..여러분... 
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
