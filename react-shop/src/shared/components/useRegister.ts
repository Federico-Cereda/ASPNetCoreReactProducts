import { create } from "zustand";

export interface RegisterState {
    isOpen: boolean;
    toggle: () => void;
    open: () => void;
    close: () => void;
}

export const useRegister = create<RegisterState>((set) => ({
    isOpen: false,
    toggle: () => set(state => ({ isOpen: !state.isOpen })),
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}))
