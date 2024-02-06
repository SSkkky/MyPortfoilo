import { create } from 'zustand';

interface useStoreState {
    menuActive: boolean;
    setMenuActive: (menuActive: boolean) => void;

    maxMenu: boolean;
    setMaxMenu: (menuActive: boolean) => void;

    nowMenu: string;
    setNowMenu: (nowMenu: string) => void;

    loading: boolean;
    setLoading: (loading: boolean) => void;

    data: [];
    setData: (data: []) => void;

    index: number;
    setIndex: (index: number) => void;

    isOnTrue: boolean;
    setIsOnTrue: (isOnTrue: boolean) => void;
}

export const useStore = create<useStoreState>((set) => ({
    menuActive: false,
    setMenuActive: (menuActive) => set({ menuActive }),

    maxMenu: false,
    setMaxMenu: (maxMenu) => set({ maxMenu }),

    nowMenu: '',
    setNowMenu: (nowMenu) => set({ nowMenu }),

    loading: false,
    setLoading: (loading) => set({ loading }),

    data: [],
    setData: (data) => set({ data }),

    index: 0,
    setIndex: (index) => set({ index }),

    isOnTrue: false,
    setIsOnTrue: (isOnTrue) => set({ isOnTrue }),
}));
