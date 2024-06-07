import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createSearchParams } from "react-router-dom";

type NextProps = {
  setisClicked: React.Dispatch<React.SetStateAction<boolean>>;
  carData: any;
};

export function Next({ setisClicked, carData }: NextProps) {
  const navigate = useNavigate();
  console.log(carData);
  return (
    <Card className="w-full flex flex-col items-center md:w-2/3 max-w-[660px] h-full shadow-2xl relative">
      <div
        className="absolute top-4 left-4 text-blue-400 cursor-pointer"
        onClick={() => setisClicked(false)}
      >
        <div className="flex flex-row gap-2 items-center">
          <Check size={16} />
          <p>Back to basic information</p>
        </div>
      </div>
      <h1 className="pt-16 font-semibold text-xl">Options for you</h1>
      <h1 className="text-xl pb-8 pt-4">
        {carData.brand} {carData.model}
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full px-4">
        <div className="w-full md:w-1/2 md:h-[360px] flex flex-col gap-4 px-4 lg:px-8 border mb-6">
          <h1 className="pt-4 font-semibold">Sell to a dealer near you</h1>
          <div className="flex flex-row gap-2 items-center">
            <Check size={16} />
            <p>Authorized dealers with a focus on your car</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Check size={16} />
            <p>Obligation free quote</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Check size={16} />
            <p>Good prices</p>
          </div>
          <Button
            className="text-black bg-yellow-200 hover:bg-yellow-300"
            onClick={() => toast.info("This feature is not available yet!")}
          >
            Make an appointment
          </Button>
          <p className="text-sm font-light">
            You can decide at any time to advertise on Carscout.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:h-[360px] flex flex-col gap-4 px-4 lg:px-8 border mb-6">
          <h1 className="pt-4 font-semibold">Sell via Carscout</h1>
          <div className="flex flex-row gap-2 items-center">
            <Check size={16} />
            <p>Wide reach</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Check size={16} />
            <p>Negotiate the best price</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Check size={16} />
            <p>Additional products that further improve visibility</p>
          </div>
          <Button
            className="text-black bg-yellow-200 hover:bg-yellow-300"
            onClick={() =>
              navigate({
                pathname: "/listing-form",
                search: `?${createSearchParams(carData)}`,
              })
            }
          >
            Create advertisement
          </Button>
          <p className="text-sm font-light pb-6 md:pb-0">
            You can also sell to a dealer at any time.
          </p>
        </div>
      </div>
    </Card>
  );
}
