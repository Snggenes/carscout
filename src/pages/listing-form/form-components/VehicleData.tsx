import { FormInput } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";

type VehicleDataProps = {
  form: any;
};

export function VehicleData({ form }: VehicleDataProps) {
  return (
    <div className="space-y-4">
      <CardTitle className="mb-6 font-normal text-xl">Car Details</CardTitle>
      <div>
        <CardDescription>Brand</CardDescription>

        <FormInput
          control={form.control}
          registerName="brand"
          registerString="Brand"
        />
      </div>
      <div>
        <CardDescription>Model</CardDescription>

        <FormInput
          control={form.control}
          registerName="model"
          registerString="Model"
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
