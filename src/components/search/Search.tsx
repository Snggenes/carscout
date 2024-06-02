import { Button } from "../../components/ui/button";
import { Form } from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { carData, prices, years } from "../../lib/data";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelect } from "../form-elements";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../contexts/userContext";

import { SearchSchema } from "../../lib/types/models";
import { mainPageSearch } from "../../lib/api";

export function Search() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
  });

  const carDataBrands = carData.map((car) => car.brand);
  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];

  const { mutate } = useMutation({
    mutationFn: (data: z.infer<typeof SearchSchema>) =>
      mainPageSearch(data, user, setUser, navigate),
  });

  return (
    <div className="relative w-full h-[220px] sm:h-[290px] md:h-[460px] xl:h-[520px] bg-[url('https://www.tweedehandsauto.nl/wp-content/uploads/2023/04/148881163_m-1568x1046.jpg')] bg-cover bg-center bg-no-repeat">
      <div
        className={`max-w-[1200px] hidden md:block absolute mt-4 bottom-10 px-4 md:xl-16 w-full`}
      >
        <div className="w-12 h-8 bg-white flex flex-row items-center justify-center rounded-t-lg">
          <Car size={30} />
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => mutate(data))}
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
            <Button
              variant="link"
              disabled
              onClick={() => {
                navigate("/advanced-search");
              }}
            >
              Advanced Search
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
