import { create } from "zustand";

type TCarStore = {
  brandsAndModels: TBrandsWithModels[];
  initialized: boolean;
  fetchBrandsAndModels: () => void;
};

type TBrandsWithModels = {
  brand: string;
  models: string[];
};


export const useCarStore = create<TCarStore>((set) => ({
  brandsAndModels: [],
  initialized: false,
  fetchBrandsAndModels: async () => {
    const response = await fetch("/api/cars/onmount");
    const data = await response.json();
    console.log(data);
    set({ brandsAndModels: data, initialized: true });
  },
}));
