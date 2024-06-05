import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../../components/ui/form";
import { SellFormSchema } from "../../lib/types/models";
import { AdInfo } from "./AdInfo";
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
import { checkLicencePlate } from "@/lib/api";
import { Next } from "./Next";

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

  const form = useForm<z.infer<typeof SellFormSchema>>({
    resolver: zodResolver(SellFormSchema),
    defaultValues: sellDefaultValues,
  });

  const onSubmit = async (data: FieldValues) => {
    if (data.licencePlate === "" || data.mileage === "") {
      return toast.error("Please fill in all the fields");
    }

    const response = await checkLicencePlate(
      data.licencePlate.toUpperCase(),
      toast
    );
    console.log(response);

    if (response.length === 0) {
      return toast.error("Licence plate not found");
    } else {
      setCarData(data);
      setIsNextClicked(true);
    }
  };

  return (
    <div className="min-h-screen pt-16 flex flex-col items-center">
      <div className="max-w-[1200px] w-full h-[220px] sm:h-[350px] md:h-[470px] lg:h-[570px] xl:h-[670px] bg-[url('https://www.autoscout24.nl/private-seller-unified-flow/assets/images/bg-desktop.webp')] bg-cover bg-center bg-no-repeat" />
      <div className="absolute top-24 text-white font-semibold text-2xl tracking-wide">
        Sell your car for free
      </div>
      <div className="hidden md:flex absolute top-40 text-white flex-row gap-8 font-semibold text-lg">
        <div className="flex flex-row gap-2 items-center">
          <p className="bg-white text-slate-400 p-1 rounded-full text-base">
            1
          </p>
          <p>Enter basic data</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="bg-white text-slate-400 p-1 rounded-full text-base">
            2
          </p>
          <p>Receive a price estimate</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="bg-white text-slate-400 p-1 rounded-full text-base">
            3
          </p>
          <p>Sell quickly and easily</p>
        </div>
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
      <AdInfo isNextClicked={isNextClicked} />
    </div>
  );
}
