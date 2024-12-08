export interface ThemeState {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export interface StockState {
  country: 'KOR' | 'USA';
  setCountry: (country: 'KOR' | 'USA') => void;
} 