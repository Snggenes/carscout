import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { z } from "zod";
import { Form } from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ListingFormSchema } from "../../lib/types/models";

import {
  carData,
  body,
  seats,
  doors,
  colors,
  upholstery,
  condition,
  years,
  fuel,
  prices,
  transmission,
  power,
} from "../../lib/data";
import { FormSelect, FormInput } from "../../components/form-elements";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { CardDescription, CardTitle } from "../../components/ui/card";

import { UploadWidget } from "@/components/image-upload/UploadWidget";
import { toast } from "react-toastify";

export default function ListingForm() {
  const [searchParams] = useSearchParams();
  const [image, setImage] = useState([]);
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const licencePlate = searchParams.get("licencePlate")?.toUpperCase();
  const km = searchParams.get("mileage");

  useEffect(() => {
    if (!licencePlate || !km) {
      navigate("/sell");
    }
  }, []);

  const form = useForm<z.infer<typeof ListingFormSchema>>({
    resolver: zodResolver(ListingFormSchema),
    defaultValues: {
      licencePlate: licencePlate || undefined,
      km: km || undefined,
      phone: "",
      postcode: "",
      houseNumber: "",
      description: "No description.",
    },
  });

  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];


  const { mutate } = useMutation({
    mutationFn: form.handleSubmit(async (data) => {
      if (image.length === 0) {
        return toast.error("Please fill in all the fields");
      }
      const res = await fetch(`/api/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...data, image }),
      });
      const newCar = await res.json();
      if (newCar.error) {
        return toast.error(newCar.error);
      }
      toast.success(newCar.message);
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["cars"]})
      navigate("/sell");
    },
  });

  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1200px] flex-1 flex flex-col md:flex-row md:gap-8">
        <div className="bg-white hidden md:flex md:flex-none md:w-[360px]">
          {licencePlate}/{km}
        </div>

        <div className="bg-white flex-1 p-4 border rounded-md">
          <Form {...form}>
            <form onSubmit={mutate} className="w-2/3 space-y-8">
              <div id="1" className="space-y-4">
                <CardTitle className="mb-6">Car Details</CardTitle>
                <div>
                  <CardDescription>Brand</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="brand"
                    placeholder="Brand"
                    defaultValues={carData.map((car) => car.brand)}
                  />
                </div>
                <div>
                  <CardDescription>Model</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="model"
                    placeholder="Model"
                    defaultValues={selectedModel}
                  />
                </div>
                <div>
                  <CardDescription>Licence Plate</CardDescription>

                  <FormInput
                    control={form.control}
                    registerName="licencePlate"
                    registerString="Licence Plate"
                  />
                </div>
              </div>
              <div id="1" className="space-y-4 border-b">
                <CardTitle className="mb-6">Characteristics</CardTitle>
                <div>
                  <CardDescription>Body</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="body"
                    placeholder="Body"
                    defaultValues={body}
                  />
                </div>
                <div>
                  <CardDescription>Seats</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="seat"
                    placeholder="Seats"
                    defaultValues={seats}
                  />
                </div>
                <div>
                  <CardDescription>Doors</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="door"
                    placeholder="Doors"
                    defaultValues={doors}
                  />
                </div>
                <div>
                  <CardDescription>Color</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="color"
                    placeholder="Color"
                    defaultValues={colors}
                  />
                </div>
                <div>
                  <CardDescription>Upholstery</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="upholstery"
                    placeholder="Upholstery"
                    defaultValues={upholstery}
                  />
                </div>
              </div>
              <div id="1" className="space-y-4 border-b">
                <CardTitle className="mb-6">Transmission</CardTitle>
                <FormSelect
                  control={form.control}
                  name="transmission"
                  placeholder="Transmission"
                  defaultValues={transmission}
                />
                <FormSelect
                  control={form.control}
                  name="power"
                  placeholder="Power"
                  defaultValues={power}
                />
              </div>
              <div id="1" className="space-y-4 border-b">
                <CardTitle className="mb-6">Condition of the car</CardTitle>
                <div>
                  <CardDescription>Condition</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="condition"
                    placeholder="Condition"
                    defaultValues={condition}
                  />
                </div>
                <div>
                  <CardDescription>Mileage</CardDescription>

                  <FormInput
                    control={form.control}
                    registerName="km"
                    registerString="Km"
                  />
                </div>
                <div>
                  <CardDescription>Year</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="year"
                    placeholder="Year"
                    defaultValues={years}
                  />
                </div>
                <div>
                  <CardDescription>Fuel</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="fuel"
                    placeholder="Fuel"
                    defaultValues={fuel}
                  />
                </div>
              </div>
              <div id="1" className="space-y-4 border-b">
                <CardTitle className="mb-6">Price</CardTitle>
                <div>
                  <CardDescription>Price</CardDescription>
                  <FormSelect
                    control={form.control}
                    name="price"
                    placeholder="Price"
                    defaultValues={prices}
                  />
                </div>
              </div>
              <div id="1" className="space-y-4 border-b">
                <CardTitle className="mb-6">Images</CardTitle>
                <UploadWidget setImage={setImage} />
              </div>
              <div id="1" className="space-y-4 border-b">
                <CardTitle className="mb-6">Description</CardTitle>
                <Textarea
                  className="w-full"
                  placeholder="Description"
                  {...form.register("description")}
                />
              </div>
              <div id="1" className="space-y-4 border-b">
                <CardTitle className="mb-6">Contact</CardTitle>

                <FormInput
                  control={form.control}
                  registerName="postcode"
                  registerString="Postcode"
                />
                <FormInput
                  control={form.control}
                  registerName="phone"
                  registerString="Phone"
                />
                <FormInput
                  control={form.control}
                  registerName="houseNumber"
                  registerString="House Number"
                />
              </div>

              <Button variant="ghost" className="mt-4">
                Place Advertisement
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
