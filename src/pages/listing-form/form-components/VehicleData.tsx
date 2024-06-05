import { FormInput, FormSelect } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { carData } from "@/lib/data";

type VehicleDataProps = {
  form: any;
};

export function VehicleData({ form }: VehicleDataProps) {
  const selectedBrand = form.watch("brand");
  const selectedModel = selectedBrand
    ? carData.find((car) => car.brand === selectedBrand)?.models
    : [];

  return (
    <div className="space-y-4">
      <CardTitle className="mb-6 font-normal text-xl">Car Details</CardTitle>
      <div>
        <CardDescription>Brand</CardDescription>
        <FormSelect
          control={form.control}
          name="brand"
          placeholder="Brand"
          defaultValues={carData.map((car) => car.brand)}
        />
      </div>
      <div>
        <CardDescription>Model</CardDescription>
        <FormSelect
          control={form.control}
          name="model"
          placeholder="Model"
          defaultValues={selectedModel}
        />
      </div>
      <div>
        <CardDescription>Licence Plate</CardDescription>

        <FormInput
          control={form.control}
          registerName="licencePlate"
          registerString="Licence Plate"
        />
      </div>
    </div>
  );
}
