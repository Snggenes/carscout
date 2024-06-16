import {
  FormCheckBox,
  FormInput,
  FormSelect,
} from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { condition, years } from "@/lib/data";

type ConditionProps = {
  form: any;
};

export function Condition({ form }: ConditionProps) {
  return (
    <div className="space-y-4">
      <CardTitle className="mb-6 font-normal text-xl">
        Condition of the car
      </CardTitle>
      <div>
        <CardDescription className="mb-1">Vehicle type</CardDescription>
        <FormSelect
          control={form.control}
          name="condition"
          placeholder="Condition"
          defaultValues={condition}
        />
      </div>
      <div>
        <CardDescription className="mb-1">Kilometer Distance</CardDescription>
        <FormInput
          control={form.control}
          registerName="km"
          registerString="Km"
        />
      </div>
      <div>
        <CardDescription className="mb-1">Year</CardDescription>
        <FormInput
          control={form.control}
          registerName="year"
          registerString="Year"
        />
      </div>
      <div>
        <CardDescription className="mb-1">Previous owners</CardDescription>
        <FormInput
          control={form.control}
          registerName="previous_owners"
          registerString="Previous owners"
          typeInput="number"
        />
      </div>
      <div>
        <FormCheckBox
          form={form}
          registerName="maintenancehistory"
          registerString="Complete maintenancehistory"
        />
      </div>
      <div>
        <FormCheckBox
          form={form}
          registerName="non-smoke"
          registerString="Non-smoke car"
        />
      </div>
      <div>
        <CardDescription className="mb-1">Next Check</CardDescription>
        <FormSelect
          control={form.control}
          name="next_check"
          placeholder="Year"
          defaultValues={years}
        />
      </div>
      <div>
        <CardDescription className="mb-1">Last maintenance</CardDescription>
        <FormSelect
          control={form.control}
          name="next_check"
          placeholder="Year"
          defaultValues={years}
        />
      </div>
      <div>
        <CardDescription className="mb-1">Replace timing belt</CardDescription>
        <FormSelect
          control={form.control}
          name="next_check"
          placeholder="Year"
          defaultValues={years}
        />
      </div>
      <div>
        <FormCheckBox
          form={form}
          registerName="vehicle-damage"
          registerString="Vehicle damage"
        />
      </div>
    </div>
  );
}
