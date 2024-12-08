import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: ColorScheme;
      dark: ColorScheme;
    };
    mode: 'light' | 'dark';
  }

  interface ColorScheme {
    background: string;
    primary: string;
    secondary: string;
    accent: string;
    text: {
      main: string;
      emphasis: string;
    }
  }
} 