import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useThemeStore } from './stores/themeStore'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'
import { Layout } from './components/layout/Layout/Layout'
import { StocksPage } from './pages/Stocks/StocksPage'

// 임시 페이지 컴포넌트들
const Dashboard = () => <div>대시보드</div>
const Portfolio = () => <div>포트폴리오</div>
const Settings = () => <div>설정</div>

function App() {
  const { mode } = useThemeStore()

  return (
    <ThemeProvider theme={{ ...theme, mode }}>
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stocks" element={<StocksPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App
