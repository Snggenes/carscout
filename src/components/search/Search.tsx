import { Button } from "../../components/ui/button";
import { Form } from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { carData, prices, years } from "../../lib/data";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormSelect } from "../form-elements";

import { useStore } from "../../contexts/store";

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
  const store = useStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const carDataBrands = carData.map((car) => car.brand);
  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const params = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });
    store.setParams(params);
    navigate(`/list?${params.toString()}`);
  }

  return (
    <div className="relative w-full h-[220px] sm:h-[290px] md:h-[460px] xl:h-[520px] bg-[url('/main.webp')] bg-cover bg-center bg-no-repeat">
      <div className={`max-w-[1200px] hidden md:block absolute mt-4 bottom-10 px-4 md:xl-16 w-full`}>
        <div className="w-12 h-8 bg-white flex flex-row items-center justify-center rounded-t-lg">
          <Car size={30} />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-6 gap-4 w-full lg:w-5/6 bg-white grid grid-cols-3"
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
  );
}
