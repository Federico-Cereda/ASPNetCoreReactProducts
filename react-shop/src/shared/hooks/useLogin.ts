import { create } from "zustand";

export interface LoginState {
    isOpenLogin: boolean;
    toggleLogin: () => void;
    openLogin: () => void;
    closeLogin: () => void;
}

export const useLogin = create<LoginState>((set) => ({
    isOpenLogin: false,
    toggleLogin: () => set(state => ({ isOpenLogin: !state.isOpenLogin })),
    openLogin: () => set({ isOpenLogin: true }),
    closeLogin: () => set({ isOpenLogin: false }),
}))
