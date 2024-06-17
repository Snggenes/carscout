import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { Form } from "../../components/ui/form";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ListingFormSchema } from "../../lib/types/models";
import { Button } from "../../components/ui/button";
import { listingFormDefaultValues } from "@/lib/types/defaultValues";
import { toast } from "react-toastify";
import { postListing } from "@/lib/api";
import { checkLicencePlate } from "@/lib/api";
import { ListingFormSidebar } from "./ListingFormSidebar";
import { TCarCheck } from "@/lib/types/types";
import { VehicleData } from "./form-components/VehicleData";
import { Characteristics } from "./form-components/Characteristics";
import { Price } from "./form-components/Price";
import { Photos } from "./form-components/Photos";
import { Contact } from "./form-components/Contact";
import { Particularities } from "./form-components/Particularities";
import { Engine } from "./form-components/Engine";
import { Condition } from "./form-components/Condition";
import { capitalizeFirstLetter } from "@/lib/helpers";
import { Environment } from "./form-components/Environment";

export default function ListingForm() {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries([...searchParams.entries()]);

  const [image, setImage] = useState([]);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mileage: km, licencePlate } = searchParamsObject;
  const [car, setCar] = useState<TCarCheck | null>();

  async function getCar(licencePlate: string) {
    const response = await checkLicencePlate(licencePlate, toast);
    setCar(response);
  }

  useEffect(() => {
    if (!licencePlate || !km) {
      navigate("/sell");
    }
  }, []);

  useEffect(() => {
    if (licencePlate) {
      getCar(licencePlate);
    }
  }, [licencePlate]);

  useEffect(() => {
    if (car) {
      form.reset({
        licencePlate: licencePlate,
        km: km,
        brand: capitalizeFirstLetter(car.merk) || "",
        model: capitalizeFirstLetter(car.handelsbenaming) || "",
        body: car.type_carrosserie_europese_omschrijving || "",
        seat: car.aantal_zitplaatsen || undefined,
        door: car.aantal_deuren || undefined,
        fuel: car.brandstof_omschrijving || "",
        power: Number(car?.nettomaximumvermogen).toString() || undefined,
        year: car.datum_eerste_toelating.substring(0, 4) || "",
        cilinders: car.aantal_cilinders || undefined,
        cilindercapacity: car.cilinderinhoud || undefined,
        emptyweight: car.massa_ledig_voertuig || undefined,
        ...listingFormDefaultValues,
      });
    }
  }, [car]);

  const form = useForm<z.infer<typeof ListingFormSchema>>({
    resolver: zodResolver(ListingFormSchema),
    defaultValues: {
      licencePlate: licencePlate || undefined,
      km: km || undefined,
      brand: "",
      model: "",
      ...listingFormDefaultValues,
    },
  });

  const { mutate } = useMutation({
    mutationFn: (data: FieldValues) => postListing(data, image, toast),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
      navigate("/");
    },
  });

  if (!car) {
    return <div className="pt-16">Loading...</div>;
  }

  return (
    <div className="pt-16 w-full flex flex-col items-center">
      <div className="mt-10 w-full max-w-[1200px] px-10 text-3xl">
        {car
          ? `${capitalizeFirstLetter(car.merk)} ${capitalizeFirstLetter(
              car.handelsbenaming
            )}`
          : "---"}
      </div>
      <div className="min-h-screen w-full max-w-[1200px] grid grid-cols-8 gap-4">
        <div className="w-full hidden md:block md:col-span-3">
          <ListingFormSidebar />
        </div>
        <div className="w-full col-span-8 md:col-span-5">
          <div className="flex flex-col justify-center items-center ">
            <Form {...form}>
              <form className="space-y-14 bg-white w-full m-8 px-2 sm:px-10 lg:px-20 pt-12">
                <VehicleData form={form} />
                <Characteristics form={form} />
                <Condition form={form} />
                <Engine form={form} />
                <Environment form={form} />
                <Photos setImage={setImage} />
                <Particularities form={form} />
                <Price form={form} />
                <Contact form={form} />
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col md:flex-row md:gap-4 justify-between items-center md:pr-10 w-full sticky bottom-0">
        <p className=" text-sm md:pl-4">
          Please check all information before posting your ad online.
        </p>
        <div className="flex flex-col md:flex-row md:gap-4 items-center">
          <Button variant="ghost" className="mt-4 mb-2 text-blue-800">
            Save as draft
          </Button>
          <Button
            variant="ghost"
            className="mt-4 bg-yellow-300 mb-2"
            onClick={form.handleSubmit((data) => mutate(data))}
          >
            Place Advertisement
          </Button>
        </div>
      </div>
    </div>
  );
}
