import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import { TCar } from "@/lib/types/types";
import { Car } from "./Car";

import { useUser } from "../contexts/userContext";

export const LastAddedCars = () => {
  const { user } = useUser();

  const { data: cars, isLoading } = useQuery({
    queryKey: ["new-listings"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/cars/lastAdded`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      const notOwnedCars = data.data.filter(
        (car: TCar) => car.owner !== user?._id
      );
      const firstFour = notOwnedCars.slice(0, 4);
      return firstFour;
    },
  });
  return (
    <div className="lg:w-full mt-4 max-w-[1200px] h-full px-2">
      <h1 className="m-2 font-semibold text-lg">Newest Cars</h1>
      {isLoading && <Loading />}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {cars?.map((car: TCar) => (
          <Car key={car._id} car={car} className="flex flex-col" />
        ))}
      </div>
    </div>
  );
};
