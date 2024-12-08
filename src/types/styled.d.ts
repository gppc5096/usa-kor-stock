import 'styled-components'

declare module 'styled-components' {
  export interface ColorScheme {
    background: {
      primary: string
      secondary: string
      tertiary: string
    }
    surface: string
    surfaceAlt: string
    text: {
      primary: string
      secondary: string
      tertiary: string
      inverse: string
    }
    border: {
      primary: string
      secondary: string
    }
    action: {
      primary: string
      secondary: string
      danger: string
      hover: string
    }
  }

  export interface DefaultTheme {
    colors: {
      light: ColorScheme
      dark: ColorScheme
    }
    mode: 'light' | 'dark'
    typography: {
      fontFamily: {
        primary: string
        mono: string
      }
      size: {
        h1: string
        h2: string
        h3: string
        h4: string
        h5: string
        body1: string
        body2: string
        caption: string
      }
      weight: {
        light: number
        regular: number
        medium: number
        bold: number
      }
      lineHeight: {
        tight: number
        normal: number
        relaxed: number
      }
    }
    spacing: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
    breakpoints: {
      mobile: string
      tablet: string
      desktop: string
      wide: string
    }
  }
} 