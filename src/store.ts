import { create } from 'zustand'

interface State {
    menuActive: boolean;
    setMenuActive: (menuActive: boolean) => void;
  }

export const useStore = create<State>((set) => ({
    menuActive: false,
    setMenuActive: (menuActive) => set({ menuActive }),
  }));