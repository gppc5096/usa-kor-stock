import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    light: {
      background: '#f4f6f9',
      primary: '#2980b9',
      secondary: '#27ae60',
      accent: '#c0392b',
      text: {
        main: '#2c3e50',
        emphasis: '#000000'
      }
    },
    dark: {
      background: '#121212',
      primary: '#3498db',
      secondary: '#2ecc71',
      accent: '#e74c3c',
      text: {
        main: '#e0e0e0',
        emphasis: '#ffffff'
      }
    }
  },
  mode: 'light' as const
}

export { theme } 