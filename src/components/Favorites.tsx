import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/userContext";
import { Car } from "./Car";
import { useQuery } from "@tanstack/react-query";
import { TCar } from "../lib/types/types";
import { getFavorites } from "@/lib/api";

import Loading from "./Loading";

export default function Favorites() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user?.username) {
      navigate("/login");
    }
  }, []);

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
    return <h1>No favorites yet!</h1>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[1200px] flex flex-col lg:p-4 gap-4">
        {cars.data.map((car: TCar) => (
          <Car key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
}
