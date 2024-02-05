import { create } from 'zustand';

interface useStoreState {
    menuActive: boolean;
    setMenuActive: (menuActive: boolean) => void;

    maxMenu: boolean;
    setMaxMenu: (menuActive: boolean) => void;

    nowMenu: string;
    setNowMenu: (nowMenu: string) => void;
}

export const useStore = create<useStoreState>((set) => ({
    menuActive : false,
    setMenuActive: (menuActive) => set({ menuActive }),

    maxMenu : false,
    setMaxMenu : (maxMenu) => set({ maxMenu }),

    nowMenu : '',
    setNowMenu : (nowMenu) => set({ nowMenu })

}));