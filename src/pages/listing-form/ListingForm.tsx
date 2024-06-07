import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
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
        brand: car.merk || "",
        model: car.handelsbenaming || "",
        body: car.type_carrosserie_europese_omschrijving || "",
        seat: car.aantal_zitplaatsen || undefined,
        door: car.aantal_deuren || undefined,
        fuel: car.brandstof_omschrijving || "",
        power: (Number(car?.nettomaximumvermogen)).toString() || undefined,
        
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

  return (
    <div className="pt-16 w-full flex flex-col items-center">
      <div className="mt-10 w-full max-w-[1200px] px-10 text-3xl">
        {car ? `${car.merk} ${car.handelsbenaming}` : "---"}
      </div>
      <div className="min-h-screen w-full max-w-[1200px] grid grid-cols-8 gap-4">
        <div className="w-full hidden lg:block lg:col-span-2">
          <ListingFormSidebar />
        </div>
        <div className="w-full col-span-8 lg:col-span-6">
          <div className="flex flex-col justify-center items-center ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((data) => mutate(data))}
                className="space-y-8 bg-white w-full m-8 px-2 sm:px-10 lg:px-20 pt-12"
              >
                <VehicleData form={form} />
                <Characteristics form={form} />
                <Engine form={form} />
                <Condition form={form} />
                <Price form={form} />
                <Photos setImage={setImage} />
                <Particularities form={form} />
                <Contact form={form} />
                <Button variant="ghost" className="mt-4">
                  Place Advertisement
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
