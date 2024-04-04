import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { useForm } from "react-hook-form";
import { Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { carData, prices, years } from "../../../lib/data";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { SaveQuery } from "./SaveQuery";
import { ActualOffer } from "./ActualOffer";

const FormSchema = z.object({
  brand: z.string({
    required_error: "Please select a brand.",
  }),
  model: z.string().optional(),
  price: z.string({
    required_error: "Please select a price.",
  }),
  year: z.string({
    required_error: "Please select a year.",
  }),
});

export function Search() {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];

  function onSubmit(data: z.infer<typeof FormSchema>) {
    navigate(`/list/${data.brand}?model=${data.model}&price=${data.price}&year=${data.year}`);
  }

  function getInfoForQuery() {
    const data = form.getValues();
    return data;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
        <div className="relative w-full">
          <img src="/main.webp" alt="" className="w-full object-cover" />
          <div className="md:absolute mt-4 bottom-0 md:bottom-10 ml-4 md:ml-16 w-full">
            <div className="w-12 h-8 bg-white flex flex-row items-center justify-center">
              <Car size={30} />
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="p-6 gap-4 w-2/3 bg-white grid grid-cols-3"
              >
                <FormField
                  control={form.control}
                  name="brand"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Brand" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {carData.map((car) => (
                            <SelectItem key={car.brand} value={car.brand}>
                              {car.brand}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Model" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {selectedModel?.map((model) => (
                            <SelectItem key={model} value={model}>
                              {model}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Price" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {prices.map((price) => {
                            const priceString = price.toString();
                            return (
                              <SelectItem key={priceString} value={priceString}>
                                {priceString}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="ghost">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      <div className="w-full mt-6 lg:mt-12 max-w-[1400px] flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
        <SaveQuery getInfoForQuery={getInfoForQuery}/>
        <ActualOffer />
      </div>
    </div>
  );
}
