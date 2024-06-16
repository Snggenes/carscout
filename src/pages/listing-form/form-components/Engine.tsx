import { FormInput, FormSelect } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { transmission, drive, gears } from "@/lib/data";

type EngineProps = {
  form: any;
};

export function Engine({ form }: EngineProps) {
  return (
    <div className="space-y-4">
      <CardTitle className="mb-6 font-normal text-xl">Transmission</CardTitle>
      <div>
        <CardDescription>Drive</CardDescription>
        <FormSelect
          control={form.control}
          name="drive"
          placeholder="Drive"
          defaultValues={drive}
        />
      </div>
      <div>
        <CardDescription>Transmission</CardDescription>
        <FormSelect
          control={form.control}
          name="transmission"
          placeholder="Transmission"
          defaultValues={transmission}
        />
      </div>
      <div>
        <CardDescription>Power</CardDescription>
        <FormInput
          control={form.control}
          registerName="power"
          registerString="Power"
          readOnly
        />
      </div>
      <div>
        <CardDescription>Gears</CardDescription>
        <FormSelect
          control={form.control}
          name="gears"
          placeholder="Gears"
          defaultValues={gears}
        />
      </div>
      <div>
        <CardDescription>Amount of cilinders</CardDescription>
        <FormInput
          control={form.control}
          registerName="cilinders"
          registerString="Cilinders"
          readOnly
        />
      </div>
      <div className="flex flex-row gap-1 w-full">
        <div className="w-full">
          <CardDescription>Cylinder capacity</CardDescription>
          <FormInput
            control={form.control}
            registerName="cilinderCapacity"
            registerString="Cilinder capacity"
            readOnly
          />
        </div>
        <div className="w-full">
          <CardDescription>Empty weight</CardDescription>
          <FormInput
            control={form.control}
            registerName="emptyWeight"
            registerString="Empty weight"
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
