import { z } from "zod";
import { Form } from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelect } from "../../components/form-elements";
import { X } from "lucide-react";
import { SidebarFormSchema } from "../../lib/types/models";
import { sidebarDefaultValues } from "../../lib/types/defaultValues";
import { SetURLSearchParams } from "react-router-dom";
import {
  carData,
  prices,
  years,
  body,
  fuel,
  km,
  transmission,
  power,
  doors,
  colors,
} from "../../lib/data";

type Props = {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sidebarOpen: boolean;
};

export function Sidebar({
  searchParams,
  setSearchParams,
  setSidebarOpen,
  sidebarOpen,
}: Props) {
  const form = useForm<z.infer<typeof SidebarFormSchema>>({
    resolver: zodResolver(SidebarFormSchema),
    defaultValues: sidebarDefaultValues(searchParams),
  });

  const carDataBrands = carData.map((car) => car.brand);
  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];

  const handleFormChange = () => {
    const nonEmptyValues: any = Object.fromEntries(
      Object.entries(form.getValues()).filter(([_, value]) => value)
    );
    setSearchParams(() => ({
      ...nonEmptyValues,
    }));
  };

  return (
    <div className="w-full col-span-1">
      <div className="flex justify-end p-2 cursor-pointer lg:hidden">
        <X size={32} onClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>
      <Form {...form}>
        <form
          className="flex flex-col w-full gap-2 p-2"
          onChange={form.handleSubmit(handleFormChange)}
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
          <FormSelect
            control={form.control}
            name="km"
            placeholder="Km"
            defaultValues={km}
          />
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
          <FormSelect
            control={form.control}
            name="door"
            placeholder="Doors"
            defaultValues={doors}
          />
          <FormSelect
            control={form.control}
            name="color"
            placeholder="Colors"
            defaultValues={colors}
          />
        </form>
      </Form>
    </div>
  );
}
