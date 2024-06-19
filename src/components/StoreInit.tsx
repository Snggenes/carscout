import { useEffect } from "react";
import { useCarStore } from "@/contexts/store";

export function StoreInit() {
  const { fetchBrandsAndModels, initialized } = useCarStore();

  useEffect(() => {
    if (!initialized) {
        fetchBrandsAndModels();
        console.log("fetching brands and models");
    }
  }, [initialized, fetchBrandsAndModels]);

  return null;
}
