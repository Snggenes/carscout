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
import { cn } from "@/lib/utils";

type SearchProps = {
  className?: string;
};

export function Search({ className = "" }: SearchProps) {
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
    <div className={cn(`max-w-[1200px] w-full ` + className)}>
      <div className="w-12 h-8 bg-white flex flex-row items-center justify-center rounded-t-lg">
        <div className="pl-4 pt-2 md:pl-0 md:pt-0">
          <Car size={30} />
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => mutate(data))}
          className="p-2 md:p-6 gap-2 md:gap-4 w-full  bg-white grid grid-cols-2 md:grid-cols-3 shadow-lg"
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
          <Button
            variant="link"
            disabled
            onClick={() => {
              navigate("/advanced-search");
            }}
          >
            Advanced Search
          </Button>
          <Button type="submit" variant="ghost" className="bg-yellow-300">
            Show Results
          </Button>
        </form>
      </Form>
    </div>
  );
}
