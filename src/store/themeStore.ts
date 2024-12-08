import { create } from 'zustand'
import { ThemeState } from '../types/store'

export const useThemeStore = create<ThemeState>((set) => ({
  darkMode: false,
  setDarkMode: (dark) => set({ darkMode: dark }),
})) 