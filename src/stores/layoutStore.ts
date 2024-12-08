import { create } from 'zustand'

interface LayoutStore {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  closeSidebar: () => void
}

export const useLayoutStore = create<LayoutStore>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ 
    isSidebarOpen: !state.isSidebarOpen 
  })),
  closeSidebar: () => set({ isSidebarOpen: false }),
})) 