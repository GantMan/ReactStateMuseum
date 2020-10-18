import create from "zustand";

const useItemsStore = create((set) => ({
  items: ["nachos", "burritos", "hot dog"],
  addItem: (newItem) => set((state) => ({ items: [...state.items, newItem] })),
  resetItems: () => set({ items: [] }),
}));

const useUserInputStore = create((set) => ({
  input: "",
  setInput: (input) => set({ input }),
  resetInput: () => set({ input: "" }),
}));

export { useItemsStore, useUserInputStore };
