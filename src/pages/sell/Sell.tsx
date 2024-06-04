import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../../components/ui/form";
import { SellFormSchema } from "../../lib/types/models";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { FormInput } from "@/components/form-elements";
import { useUser } from "../../contexts/userContext";
import { useEffect, useState } from "react";
import { sellDefaultValues } from "@/lib/types/defaultValues";

export default function Sell() {
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const [isNextClicked, setIsNextClicked] = useState(false);
  const [carData, setCarData] = useState<FieldValues>();

  useEffect(() => {
    if (!user?.username) {
      toast.error("You need to be logged in to access this page");
      navigate("/login", {
        state: {
          from: location.pathname,
        },
      });
    }
  }, []);

  async function checkLicencePlate(licencePlate: string) {
    const response = await fetch(
      `/api/licenceplatecheck?licencePlate=${licencePlate}`
    );
    if (!response.ok) {
      return toast.error("Licence plate not found");
    }
    const data = await response.json();
    return data;
  }

  const onSubmit = async (data: FieldValues) => {
    if (data.licencePlate === "" || data.mileage === "") {
      return toast.error("Please fill in all the fields");
    }

    const response = await checkLicencePlate(data.licencePlate.toUpperCase());
    console.log(response);

    if (response.length === 0) {
      return toast.error("Licence plate not found");
    } else {
      setCarData(data);
      setIsNextClicked(true);
    }
  };

  const form = useForm<z.infer<typeof SellFormSchema>>({
    resolver: zodResolver(SellFormSchema),
    defaultValues: sellDefaultValues,
  });

  return (
    <div className="min-h-screen pt-16 flex flex-col items-center">
      <div className="max-w-[1200px] w-full h-[220px] sm:h-[350px] md:h-[470px] lg:h-[570px] xl:h-[670px] bg-[url('https://www.autoscout24.nl/private-seller-unified-flow/assets/images/bg-desktop.webp')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute top-24 text-white font-semibold text-2xl tracking-wide">
        Sell your car for free
      </div>
      <div
        className={
          !isNextClicked
            ? `w-full bg-transparent absolute top-44 md:top-64 flex items-center justify-center h-[470px]`
            : `w-full bg-transparent absolute top-44 md:top-64 flex items-center justify-center`
        }
      >
        {!isNextClicked ? (
          <Card className="w-full md:w-2/3 max-w-[500px] h-full shadow-2xl">
            <CardHeader className="py-12">
              <CardTitle>Enter your data</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
              >
                <Form {...form}>
                  <FormInput
                    control={form.control}
                    registerName="licencePlate"
                    registerString="Licence Plate"
                  />
                  <FormInput
                    control={form.control}
                    registerName="mileage"
                    registerString="Mileage"
                  />
                </Form>

                <Button
                  variant="ghost"
                  disabled={form.formState.isSubmitting}
                  className="bg-yellow-200 mt-4"
                >
                  Next
                </Button>
                <div className="mt-4 w-full p-4 flex flex-col justify-center items-center">
                  <p>Can't find the details of your vehicle?</p>
                  <p className="text-blue-300 text-sm">
                    Click here to enter the data manually
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Next setisClicked={setIsNextClicked} carData={carData} />
        )}
      </div>
      {/* <div className="bg-blue-400 absolute top-[680px] md:top-[760px] w-full">
        ajdsgjhg
      </div> */}
    </div>
  );
}

type NextProps = {
  setisClicked: React.Dispatch<React.SetStateAction<boolean>>;
  carData: any;
};

function Next({ setisClicked, carData }: NextProps) {
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
      <h1 className="text-xl pb-12">Renault Megane 1.6-16V Priv. Comf.</h1>
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
              navigate(
                `/listing-form?licencePlate=${carData.licencePlate}&mileage=${carData.mileage}`
              )
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
