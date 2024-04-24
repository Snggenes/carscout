import { Button } from "../../components/ui/button";
import { Form } from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { carData, prices, years } from "../../lib/data";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SaveQuery } from "./SaveQuery";
import { ActualOffer } from "./ActualOffer";
import { FormSelect } from "../form-elements";

const FormSchema = z.object({
  brand: z.string({
    required_error: "Please select a brand.",
  }),
  model: z.string().optional(),
  price: z.string().optional(),
  year: z.string().optional(),
});

export function Search() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const carDataBrands = carData.map((car) => car.brand);
  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const queries = new URLSearchParams();
    if (data.brand) queries.set("brand", data.brand);
    if (data.model) queries.set("model", data.model);
    if (data.price) queries.set("price", data.price);
    if (data.year) queries.set("year", data.year);
    navigate(`/list?${queries.toString()}`);
  }

  function getInfoForQuery() {
    const data = form.getValues();
    return data;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="relative w-full h-[560px] xl:h-[680px] bg-[url('/main.webp')] bg-cover bg-no-repeat bg-center">
        <div className="absolute mt-4 bottom-10 ml-4 md:ml-16 w-full">
          <div className="w-12 h-8 bg-white flex flex-row items-center justify-center rounded-t-lg">
            <Car size={30} />
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-6 gap-4 w-2/3 bg-white grid grid-cols-3"
            >
              <FormSelect
                control={form.control}
                name="brand"
                placeholder="Brand"
                defaultValues={carDataBrands}
              />
              <FormSelect
                control={form.control}
                name="model"
                placeholder="Model"
                defaultValues={selectedModel}
              />
              <FormSelect
                control={form.control}
                name="price"
                placeholder="Price"
                defaultValues={prices}
              />
              <FormSelect
                control={form.control}
                name="year"
                placeholder="Year"
                defaultValues={years}
              />
              <Button type="submit" variant="ghost">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-full mt-6 lg:mt-12 max-w-[1400px] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
        <SaveQuery getInfoForQuery={getInfoForQuery} />
        <ActualOffer />
      </div>
    </div>
  );
}
