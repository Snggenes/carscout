import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/userContext";
import { Car } from "../Car";
import { useQuery } from "@tanstack/react-query";
import { TCar } from "../../lib/types/types";
import { getFavorites } from "@/lib/api";
import { Check, BookHeart } from "lucide-react";
import Loading from "../Loading";
import { Button } from "../ui/button";

export function Favorites() {
  const navigate = useNavigate();
  const { user } = useUser();

  const {
    data: cars,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["favorites", user?.favorites],
    queryFn: () => getFavorites(),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <h1>Error fetching favorites</h1>;
  }

  if (user?.favorites.length === 0) {
    return (
      <div className="bg-white w-full max-w-[1200px] flex flex-col lg:p-4 gap-4 mt-20 lg:mt-36">
        <div className="w-full flex justify-center">
          <h1 className="mt-8 lg:mt-4">My favorites is empty.</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 items-center p-12 pb-32">
          <div>
            <BookHeart size={130} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <Check size={24} />
              <p>Receive price discounts.</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Check size={24} />
              <p>Receive special promotions on your favorites.</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Check size={24} />
              <p>Compare easily and cleary.</p>
            </div>
            <Button
              className="mt-8 bg-yellow-300"
              variant={`ghost`}
              onClick={() => navigate("/")}
            >
              Search Now
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full max-w-[1200px] flex flex-col lg:p-4 gap-4 mt-20 lg:mt-32">
        {cars.data.map((car: TCar) => (
          <Car key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}
