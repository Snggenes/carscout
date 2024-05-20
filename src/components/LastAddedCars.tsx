import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import { TCar } from "@/lib/types/types";
import { Car } from "./Car";

export const LastAddedCars = () => {
  const { data: cars, isLoading } = useQuery({
    queryKey: ["new-listings"],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/cars?random=true&limit=4`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log(data);

      return data;
    },
  });
  return (
    <div className="lg:w-full mt-4 max-w-[1200px] h-full px-2">
      <h1 className="m-2 font-semibold text-lg">Newest Cars</h1>
      {isLoading && <Loading />}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {cars?.data.map((car: TCar) => (
          <Car key={car._id} car={car} className="flex flex-col"/>
        ))}
      </div>
    </div>
  );
};
