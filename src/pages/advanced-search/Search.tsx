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
import { carData, prices, years, body, fuel } from "../../../lib/data";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  brand: z.string({
    required_error: "Please select a brand.",
  }),
  model: z.string().optional(),
  price: z.string({
    required_error: "Please select a price.",
  }),
  year: z.string().optional(),
  body: z.string().optional(),
  fuel: z.string().optional(),
});

export default function AdvancedSearch() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <div className=" w-screen px-4 lg:px-8 bg-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full"
        >
          <p className="p-6 text-3xl font-semibold">Basic data</p>
          <div className="flex flex-col md:flex-row w-full justify-center gap-4 lg:gap-12 px-4 lg:px-12 lg:mb-8">
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <p>Brand</p>
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
                <FormItem className="w-full md:w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <p>Model</p>
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
            <div className="w-1/3"></div>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center gap-4 lg:gap-12 px-4 lg:px-12 mb-4 lg:mb-8">
            <FormField
              control={form.control}
              name="fuel"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <p>Fuel</p>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Fuel" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {fuel.map((fuel) => (
                        <SelectItem key={fuel} value={fuel}>
                          {fuel}
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
              name="year"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <p>Year</p>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="From" />
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
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <p>Body</p>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Body" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {body.map((body) => (
                        <SelectItem key={body} value={body}>
                          {body}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-center gap-4 lg:gap-12 px-4 lg:px-12 mb-4 lg:mb-8">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full md:w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <p>Price</p>
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
            <div className="hidden md:block md:w-1/3"></div>
            <div className="hidden md:block md:w-1/3"></div>
          </div>
          <div className="flex flex-col lg:flex-row w-full justify-center gap-4 lg:gap-12 px-4 lg:px-12 mb-4 lg:mb-8">
            <FormField
              control={form.control}
              name="fuel"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <p>Country</p>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Netherlands">Netherlands</SelectItem>
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
                <FormItem className="w-full lg:w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <p>Year</p>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="From" />
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
            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem className="w-full lg:w-1/3">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <p>Body</p>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Body" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {body.map((body) => (
                        <SelectItem key={body} value={body}>
                          {body}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" variant='destructive' className="fixed bottom-20 right-[50%] ">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
