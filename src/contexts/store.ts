import { create } from "zustand";
import { TCar } from "../lib/types/types";

type TCarStore = {
  allCars: TCar[];
  modifiedCars: TCar[];
  brandsAndModels: TBrandsWithModels[];
  initialized: boolean;
  fetchAllCars: () => void;
  modifyCars: (
    brand: string | undefined,
    model: string | undefined,
    price: string | undefined,
    year: string | undefined
  ) => void;
};

type TBrandsWithModels = {
  brand: string;
  models: string[];
};

type TCarData = TBrandsWithModels[];

export const useCarStore = create<TCarStore>((set, get) => ({
  allCars: [],
  modifiedCars: [],
  initialized: false,
  brandsAndModels: [],
  fetchAllCars: async () => {
    const response = await fetch("/api/cars");
    const data = await response.json();
    set({ allCars: data });

    const lenghtOfAllCars = data.length;
    const carData: TCarData = [];

    for (let i = 0; i < lenghtOfAllCars; i++) {
      let brandsWithModels: TBrandsWithModels = {} as TBrandsWithModels;
      let brand = data[i].brand;
      let model = data[i].model;
      let index = carData.findIndex((car) => car.brand === brand);
      if (index === -1) {
        brandsWithModels.brand = brand;
        brandsWithModels.models = [model];
        carData.push(brandsWithModels);
      } else {
        carData[index].models.push(model);
      }
    }
    set({ brandsAndModels: carData, initialized: true });
  },
  modifyCars: (
    brand: string | undefined,
    model: string | undefined,
    price: string | undefined,
    year: string | undefined
  ) => {
    let allCars = get().allCars;
    const brandsAndModels = get().brandsAndModels;
    if (price) {
      allCars = allCars.filter((car) => car.price < Number(price));
    }
    if (year) {
      allCars = allCars.filter((car) => car.year > Number(year));
    }
    if (brand) {
      allCars = allCars.filter((car) => car.brand === brand);
    }
    if (model) {
      console.log(model, brand);
      const brandOfModel = brandsAndModels.find((item) => item.brand === brand);
      const isModelInBrandOfModel = brandOfModel?.models.includes(model);
      console.log(isModelInBrandOfModel);
      if (isModelInBrandOfModel) {
        allCars = allCars.filter((car) => car.model === model);
      } else {
        console.log("Model not in brand");
      }
    }

    set({ modifiedCars: allCars });
  },
}));
