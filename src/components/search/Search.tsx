import { Button } from "../../components/ui/button";
import { Form } from "../../components/ui/form";
import { useForm } from "react-hook-form";
import { Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { prices, years } from "../../lib/data";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSelect, FormInput } from "../form-elements";
import { useMutation } from "@tanstack/react-query";
import { useUser } from "../../contexts/userContext";

import { SearchSchema } from "../../lib/types/models";
import { mainPageSearch } from "../../lib/api";
import { cn } from "@/lib/utils";

import { useCarStore } from "@/contexts/store";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type SearchProps = {
  className?: string;
};

export function Search({ className = "" }: SearchProps) {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
  });

  const { brandsAndModels } = useCarStore();
  const { allCars, modifiedCars, modifyCars } = useCarStore();

  const carDataBrands = brandsAndModels.map((item) => item.brand);
  const selectedBrand = form.watch("brand");
  const selectedModel = form.watch("model");
  const selectedPrice = form.watch("price");
  const selectedYear = form.watch("year");

  useEffect(() => {
    if (selectedBrand || selectedModel || selectedPrice || selectedYear) {
      modifyCars(selectedBrand, selectedModel, selectedPrice, selectedYear);
    }
  }, [selectedBrand, selectedModel, selectedPrice, selectedYear]);

  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  useEffect(() => {
    if (selectedBrand) {
      const selectedModels = brandsAndModels.find(
        (item) => item.brand === selectedBrand
      )?.models;
      setSelectedModels(selectedModels || []);
    }
  }, [selectedBrand]);

  const { mutate } = useMutation({
    mutationFn: (data: z.infer<typeof SearchSchema>) =>
      mainPageSearch(data, user, setUser, navigate),
  });

  return (
    <div className={cn(`max-w-[1100px] w-full ` + className)}>
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
            defaultValues={selectedModels}
          />
          <FormSelect
            control={form.control}
            name="price"
            placeholder="Price up to (€)"
            defaultValues={prices}
          />
          <FormSelect
            control={form.control}
            name="year"
            placeholder="Year (from)"
            defaultValues={years}
          />
          <FormInput
            control={form.control}
            registerName="postcode"
            registerString="Postcode"
            typeInput="text"
          />

          <Button type="submit" variant="ghost" className="bg-yellow-300">
            {selectedBrand || selectedModel || selectedPrice || selectedYear
              ? `${modifiedCars.length} Results`
              : `${allCars.length} Results`}
          </Button>
          <h1
            onClick={() => {
              toast.info("This feature is not available yet!");
            }}
            className="text-blue-800 w-full sm:col-span-2 my-3 md:col-span-3 flex justify-center cursor-pointer md:m-0 md:p-0"
          >
            Advanced Search
          </h1>
        </form>
      </Form>
    </div>
  );
}
