import { create } from "zustand";

export interface RegisterState {
    isOpenRegister: boolean;
    toggleRegister: () => void;
    openRegister: () => void;
    closeRegister: () => void;
}

export const useRegister = create<RegisterState>((set) => ({
    isOpenRegister: false,
    toggleRegister: () => set(state => ({ isOpenRegister: !state.isOpenRegister })),
    openRegister: () => set({ isOpenRegister: true }),
    closeRegister: () => set({ isOpenRegister: false }),
}))
