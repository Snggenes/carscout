import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/userContext";
import {Car} from "../../components/Car"
import { useQuery } from "@tanstack/react-query";
import { TCar } from "../../lib/types/types";

export default function Favorites() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user?.username) {
      navigate("/login");
    }
  }, []);

 

  const { data: cars, isLoading, isError } = useQuery({
    queryKey: ["favorites", user?.favorites],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/favorites`, {
        credentials: "include",
      });
      return res.json();
    },
  });

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>Error fetching favorites</h1>;
    }


    if (user?.favorites.length === 0) {
        return <h1>No favorites yet!</h1>;
      }

  return (
    <div>
        {cars.data.map((car: TCar) => (
            <Car key={car._id} car={car} />
        ))}
    </div>
  );
}
