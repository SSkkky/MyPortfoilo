import { create } from 'zustand';
import { Types } from 'mongoose';
import { guestBookListType } from './models/dataTypes';

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

    onClickMenu: string;
    setOnClickMenu: (onClickMenu: string) => void;

    isOnDelAndUpdate: boolean,
    setDelAndUpdate: (isOnDelAndUpdate: boolean) => void;

    objectId: Types.ObjectId | null;
    setObjectId: (objectId: Types.ObjectId) => void;

    guestBookDataObject: guestBookListType | null;
    setGuestBookDataObject: (guestBookDataObject: guestBookListType) => void;

    popupKeyword: string;
    setPopupKeyword: (popupKeyword: string) => void;

    popupInputUserPassword: string;
    setPopupInputUserPassword: (popupInputUserPassword: string) => void;
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

    onClickMenu: '',
    setOnClickMenu: (onClickMenu) => set({ onClickMenu }),

    isOnDelAndUpdate : false,
    setDelAndUpdate : (isOnDelAndUpdate) => set({ isOnDelAndUpdate }),

    objectId: null,
    setObjectId: (objectId) => set({ objectId }),

    guestBookDataObject: null,
    setGuestBookDataObject: (guestBookDataObject) => set({ guestBookDataObject }),

    popupKeyword: '',
    setPopupKeyword: (popupKeyword) => set({ popupKeyword }),

    popupInputUserPassword: '',
    setPopupInputUserPassword: (popupInputUserPassword) => set({ popupInputUserPassword }),
}));

interface zIndexState {
    zNum: number;
    setZNum: (zNum: number) => void;
}

export const zIndex = create<zIndexState>((set) => ({
    zNum: 0,
    setZNum: (zNum) => set({ zNum })
}));