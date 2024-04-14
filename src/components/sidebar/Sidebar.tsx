import { cn } from "../../../lib/utils";
import { Form } from "../../../components/ui/form";
import { useForm } from "react-hook-form";
import { carData, prices, years, body, fuel } from "../../../lib/data";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelect } from "../../components/form-elements";

type Props = {
  className?: string;
  setSearchParams: any;
  searchParams?: any;
};

const FormSchema = z.object({
  brand: z.string().optional(),
  model: z.string().optional(),
  price: z.string().optional(),
  year: z.string().optional(),
  body: z.string().optional(),
  fuel: z.string().optional(),
});

export function Sidebar({ className, searchParams, setSearchParams }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const paramsObject: any = {};
  for (const [key, value] of searchParams.entries()) {
    paramsObject[key] = value;
  }

  const carDataBrands = carData.map((car) => car.brand);
  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];

  const handleFormChange = () => {
    return form.handleSubmit(() => {
      const nonEmptyValues: any = Object.fromEntries(
        Object.entries(form.getValues()).filter(([_, value]) => value)
      );
      setSearchParams(() => ({
        ...paramsObject,
        ...nonEmptyValues,
      }));
    });
  };

  return (
    <div
      className={cn(
        "border flex mt-6 lg:w-[256px] lg:fixed left-0 top-16 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Form {...form}>
        <form className="flex flex-col w-full" onChange={handleFormChange()}>
          <FormSelect
            control={form.control}
            name="brand"
            placeholder="Brand"
            defaultValues={carDataBrands}
            defaultValue={paramsObject}
          />
          <FormSelect
            control={form.control}
            name="model"
            placeholder="Model"
            defaultValues={selectedModel}
            defaultValue={paramsObject}
          />
          <FormSelect
            control={form.control}
            name="price"
            placeholder="Price"
            defaultValues={prices}
            defaultValue={paramsObject}
          />
          <FormSelect
            control={form.control}
            name="year"
            placeholder="Year"
            defaultValues={years}
            defaultValue={paramsObject}
          />
          <FormSelect
            control={form.control}
            name="body"
            placeholder="Body"
            defaultValues={body}
            defaultValue={paramsObject}
          />
          <FormSelect
            control={form.control}
            name="fuel"
            placeholder="Fuel"
            defaultValues={fuel}
            defaultValue={paramsObject}
          />
        </form>
      </Form>
    </div>
  );
}
