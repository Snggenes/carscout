import { FormInput, FormSelect } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { condition, years, fuel } from "@/lib/data";

type ConditionProps = {
  form: any;
};

export function Condition({ form }: ConditionProps) {
  return (
    <div className="space-y-4 border-b">
      <CardTitle className="mb-6 font-normal text-xl">
        Condition of the car
      </CardTitle>
      <div>
        <CardDescription>Condition</CardDescription>
        <FormSelect
          control={form.control}
          name="condition"
          placeholder="Condition"
          defaultValues={condition}
        />
      </div>
      <div>
        <CardDescription>Mileage</CardDescription>

        <FormInput
          control={form.control}
          registerName="km"
          registerString="Km"
        />
      </div>
      <div>
        <CardDescription>Year</CardDescription>
        <FormSelect
          control={form.control}
          name="year"
          placeholder="Year"
          defaultValues={years}
        />
      </div>
      <div>
        <CardDescription>Fuel</CardDescription>
        <FormSelect
          control={form.control}
          name="fuel"
          placeholder="Fuel"
          defaultValues={fuel}
        />
      </div>
    </div>
  );
}
