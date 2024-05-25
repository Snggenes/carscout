import { useUser } from "../contexts/userContext";
import { useState, useEffect } from "react";
import { TCar } from "../lib/types/types";
import { toast } from "react-toastify";

type Props = {
  car: TCar;
};

export default function Heart({car}: Props) {
  const { user, setUser } = useUser();
  const [imageSrc, setImageSrc] = useState<string>("/heart-regular.svg");

    useEffect(() => {
        if (user?.favorites.includes(car._id)) {
        setImageSrc("/heart-solid.svg");
        } else {
        setImageSrc("/heart-regular.svg");
        }
    }, [user]);

    async function handleHeartClick(){
      const response = await fetch(`/api/auth/favorites`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ id: car._id }),
      });
      const data = await response.json();
      setUser(data.data);
      if (data.error) {
        toast.error(data.error);
      }
      if (data.message) {
        toast.info(data.message);
      }
    }

    if (user?.cars.includes(car._id) || !user) return null;

    return (
        <img
            src={imageSrc}
            alt="heart"
            className="w-6 h-6 cursor-pointer"
            onClick={handleHeartClick}
        />
    );
    
}
