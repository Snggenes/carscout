import { BookHeart, FolderSearch, ShoppingBag, CableCar } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function AccountLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col space-y-12 justify-center items-center lg:pt-16">
      <div className="bg-white py-4 flex flex-wrap justify-center items-center gap-8 mt-20">
        <div
          className="flex flex-col items-center gap-4 border p-16 cursor-pointer hover:border-gray-800 transition duration-500"
          onClick={() => navigate("/account/favorites")}
        >
          <BookHeart size={130} />
          <p>Favorites</p>
        </div>
        <div
          className="flex flex-col items-center gap-4 border p-16 cursor-pointer hover:border-gray-800 transition duration-500"
          onClick={() => navigate("/account/searches")}
        >
          <FolderSearch size={130} />
          <p>Saved searches</p>
        </div>
        <div
          className="flex flex-col items-center gap-4 border p-16 cursor-pointer hover:border-gray-800 transition duration-500"
          onClick={() => navigate("/account/listings")}
        >
          <CableCar size={130} />
          <p>Advertisement</p>
        </div>
        <div
          className="flex flex-col items-center gap-4 border p-16 cursor-pointer hover:border-gray-800 transition duration-500"
          onClick={() => navigate("/account/appointments")}
        >
          <ShoppingBag size={130} />
          <p>Fast sales appointments</p>
        </div>
      </div>
    </div>
  );
}
