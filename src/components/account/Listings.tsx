import { Car, Bike, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Listings() {
  const navigate = useNavigate();
  return (
    <div className="pt-20 lg:pt-36 w-full px-4 flex flex-col gap-4">
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="bg-white w-full md:w-1/2 flex justify-center items-center h-40">
          <div
            className="flex flex-row items-center gap-4 cursor-pointer"
            onClick={() => navigate("/sell")}
          >
            <Car size={60} />
            <p className="">Sell your car</p>
          </div>
        </div>
        <div className="bg-white w-full md:w-1/2 flex justify-center items-center h-40">
          <div className="flex flex-row items-center gap-4">
            <Bike size={60} />
            <p className="">Sell your motorcycle</p>
          </div>
        </div>
      </div>
      <div className="px-4 w-full bg-white">
        <div className="flex flex-col p-6 gap-1">
          <p>Counselor</p>
          <p className="font-light text-sm">
            Checklist and informative articles for buying and selling
          </p>
        </div>
      </div>
      <div className="mt-4 mx-4  w-full flex flex-col justify-center items-center p-6 gap-1">
        <h1 className="font-bold">Do you have any questions about creating?</h1>
        <p className="text-sm font-light">
          Carscout can be reached by telephone from Monday to Friday from 8:30
          AM to 5:00 PM. Phone number:
        </p>
        <div className="flex flex-row items-center gap-2">
          <Phone size={24} />
          <p className="text-sm">088 - 73 00 100</p>
        </div>
      </div>
    </div>
  );
}
