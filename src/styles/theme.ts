import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    light: {
      background: {
        primary: '#f4f6f9',    // 메인 배경
        secondary: '#ffffff',   // 카드/컴포넌트 배경
        tertiary: '#e9ecef'    // 강조 배경
      },
      surface: '#ffffff',      // 기본 표면
      surfaceAlt: '#f8f9fa',   // 대체 표면
      text: {
        primary: '#2c3e50',    // 주요 텍스트
        secondary: '#505d6b',   // 보조 텍스트
        tertiary: '#8795a5',    // 부가 텍스트
        inverse: '#ffffff'      // 반전 텍스트
      },
      border: {
        primary: '#e1e4e8',    // 주요 테두리
        secondary: '#eaecef'    // 보조 테두리
      },
      action: {
        primary: '#2980b9',    // 주요 액션
        secondary: '#8e44ad',   // 성공/긍정
        danger: '#e74c3c',     // 위험/경고
        hover: '#3498db',       // 호버 상태
      }
    },
    dark: {
      background: {
        primary: '#121212',    // 메인 배경
        secondary: '#1e1e1e',   // 카드/컴포넌트 배경
        tertiary: '#2d2d2d'    // 강조 배경
      },
      surface: '#1e1e1e',      // 기본 표면
      surfaceAlt: '#2d2d2d',   // 대체 표면
      text: {
        primary: '#e0e0e0',    // 주요 텍스트
        secondary: '#a0a0a0',   // 보조 텍스트
        tertiary: '#808080',    // 부가 텍스트
        inverse: '#121212'      // 반전 텍스트
      },
      border: {
        primary: '#2d2d2d',    // 주요 테두리
        secondary: '#404040'    // 보조 테두리
      },
      action: {
        primary: '#2980b9',    // 주요 액션
        secondary: '#8e44ad',   // 성공/긍정
        danger: '#e74c3c',     // 위험/경고
        hover: '#3498db',       // 호버 상태
      }
    }
  },
  mode: 'light' as const,
  typography: {
    fontFamily: {
      primary: "'Noto Sans KR', sans-serif",
      mono: "'Roboto Mono', monospace"
    },
    size: {
      h1: '2.5rem',     // 40px
      h2: '2rem',       // 32px
      h3: '1.75rem',    // 28px
      h4: '1.5rem',     // 24px
      h5: '1.25rem',    // 20px
      body1: '1rem',     // 16px
      body2: '0.875rem', // 14px
      caption: '0.75rem' // 12px
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    xxl: '3rem'      // 48px
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px'
  }
}

export { theme } 