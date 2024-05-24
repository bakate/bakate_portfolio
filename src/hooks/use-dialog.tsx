import { create } from "zustand";

type Store = {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
};

export const useDialog = create<Store>((set) => ({
  isOpen: false,
  setOpen: (open) => set({ isOpen: open }),
}));
