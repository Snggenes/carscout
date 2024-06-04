import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import { TCar } from "@/lib/types/types";
import { Car } from "./Car";
import { getLastAddedCars } from "@/lib/api";
import { Plus } from "lucide-react";

import { useUser } from "../contexts/userContext";

export const LastAddedCars = () => {
  const { user } = useUser();

  const { data: cars, isLoading } = useQuery({
    queryKey: ["new-listings"],
    queryFn: () => getLastAddedCars(user),
  });
  return (
    <div className="lg:w-full max-w-[1200px] h-full">
      <h1 className="m-2 font-semibold text-lg">Newest Cars</h1>
      {isLoading && <Loading />}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {cars?.map((car: TCar) => (
          <Car key={car._id} car={car} mainPage={true} />
        ))}
      </div>
      <div className="mt-4 p-5 w-full flex flex-row gap-2 justify-center items-center bg-white text-blue-300 font-semibold">
        <Plus size={15} />
        <p>Show more</p>
      </div>
    </div>
  );
};
