import { useEffect } from "react";
import { useCarStore } from "@/contexts/store";

export function StoreInit() {
  const { fetchAllCars, initialized } = useCarStore();

  useEffect(() => {
    if (!initialized) {
      fetchAllCars();
    }
  }, [initialized, fetchAllCars]);

  return null;
}
