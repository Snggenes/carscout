import { create } from "zustand";

type paramsStore = {
  params: URLSearchParams;
  setParams: (params: URLSearchParams) => void;
  deleteParams: (key: string) => void;
};

export const useStore = create<paramsStore>((set) => ({
  params: new URLSearchParams(),
  setParams: (params) => set({ params }),
  deleteParams: (key) => {
    set((state) => {
      state.params.delete(key);
      return { params: state.params };
    });
  },
}));

