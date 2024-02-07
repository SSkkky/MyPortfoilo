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

    about: boolean;
    setAbout: (about: boolean) => void;

    portfolio: boolean;
    setPortfolio: (portfolio: boolean) => void;

    contact: boolean;
    setContact: (contact: boolean) => void;

    isOnTrue: boolean;
    setIsOnTrue: (isOnTrue: boolean) => void;

    aboutZNum: number;
    setAboutZNum: (index: number) => void;

    portfolioZNum: number;
    setPortfolioZNum: (index: number) => void;

    contactZNum: number;
    setContactZNum: (index: number) => void;

    onClickMenu: string;
    setOnClickMenu: (onClickMenu: string) => void;
}

export const useStore = create<useStoreState>((set) => ({
    menuActive: false,
    setMenuActive: (menuActive) => set({ menuActive }),

    maxMenu: false,
    setMaxMenu: (maxMenu) => set({ maxMenu }),

    nowMenu: '',
    setNowMenu: (nowMenu) => set({ nowMenu }),

    about: false,
    setAbout: (about) => set({ about }),

    portfolio: false,
    setPortfolio: (portfolio) => set({ portfolio }),

    contact: false,
    setContact: (contact) => set({ contact }),

    loading: false,
    setLoading: (loading) => set({ loading }),

    data: [],
    setData: (data) => set({ data }),

    index: 0,
    setIndex: (index) => set({ index }),

    isOnTrue: false,
    setIsOnTrue: (isOnTrue) => set({ isOnTrue }),

    aboutZNum: 0,
    setAboutZNum: (aboutZNum) => set({ aboutZNum }),

    portfolioZNum: 0,
    setPortfolioZNum: (portfolioZNum) => set({ portfolioZNum }),

    contactZNum: 0,
    setContactZNum: (contactZNum) => set({ contactZNum }),

    onClickMenu: '',
    setOnClickMenu: (onClickMenu) => set({ onClickMenu }),
}));
