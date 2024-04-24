import { Button } from "../../components/ui/button";
import { Form } from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { carData, prices, years, body, fuel } from "../../lib/data";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelect } from "../../components/form-elements";

const FormSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  price: z.string().optional(),
  year: z.string().optional(),
  body: z.string().optional(),
  fuel: z.string().optional(),
});

export default function AdvancedSearch() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const carDataBrands = carData.map((car) => car.brand);
  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <div className={`w-screen px-4 lg:px-8 bg-white`}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          <p className="p-6 text-3xl font-semibold">Basic data</p>
          <div className="flex flex-col md:flex-row w-full justify-center gap-4 lg:gap-12 px-4 lg:px-12 lg:mb-8">
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
            <FormSelect
              control={form.control}
              name="body"
              placeholder="Body"
              defaultValues={body}
            />
            <FormSelect
              control={form.control}
              name="fuel"
              placeholder="Fuel"
              defaultValues={fuel}
            />
          </div>
          <Button
            type="submit"
            variant="destructive"
            className={`fixed bottom-20 right-[50%]`}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
