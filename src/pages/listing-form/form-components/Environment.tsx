import { CardTitle, CardDescription } from "@/components/ui/card";
import {
  FormInput,
  FormRadio,
  FormSelect,
  FormCheckBox,
} from "@/components/form-elements";
import { energyLabel, emissionClass } from "@/lib/data";

type Props = {
  form: any;
};

export function Environment({ form }: Props) {
  const radioElements = [
    "co2 emissions, fuel consumption values ​​for vehicles according to current NEDC regulations",
    "Fuel consumption values ​​for vehicles according to current WLTP regulations",
  ];
  const extraFuelOptions = [
    "Normal/Benzin 91",
    "Super 95",
    "Super Plus 98",
    "Super E10 95",
    "Super E10 91",
    "Super Plus E10 98",
  ];
  return (
    <div className="space-y-4">
      <CardTitle className="mb-6 font-normal text-xl">Environment</CardTitle>

      <div>
        <CardDescription>Fuel</CardDescription>
        <FormInput
          control={form.control}
          registerName="fuel"
          registerString="Fuel"
          readOnly
        />
      </div>

      <FormRadio
        className="flex flex-col gap-2"
        form={form}
        registerName="environment"
        defaultValues={radioElements}
      />

      <div>
        <CardDescription className="mb-2">Energy label</CardDescription>
        <FormSelect
          control={form.control}
          name="energyLabel"
          placeholder="Energy label"
          defaultValues={energyLabel}
        />
      </div>

      <div>
        <CardDescription className="mb-2">
          Fuel consumption combined
        </CardDescription>
        <FormInput
          control={form.control}
          registerName="fuelConsumptionCombined"
          registerString="Combined fuel consumption (l/100 km)"
          readOnly
        />
      </div>
      <div>
        <CardDescription className="mb-2">
          CO2 emissions combined
        </CardDescription>
        <FormInput
          control={form.control}
          registerName="co2EmissionsCombined"
          registerString="CO2 emissions combined (g/km)"
          readOnly
        />
      </div>
      <CardDescription>Extra fuel options</CardDescription>
      <div className="grid grid-cols-2 gap-3">
        <FormCheckBox
          form={form}
          registerName="extraFuelOptions"
          registerString={extraFuelOptions[0]}
        />
        <FormCheckBox
          form={form}
          registerName="extraFuelOptions"
          registerString={extraFuelOptions[1]}
        />
        <FormCheckBox
          form={form}
          registerName="extraFuelOptions"
          registerString={extraFuelOptions[2]}
        />
        <FormCheckBox
          form={form}
          registerName="extraFuelOptions"
          registerString={extraFuelOptions[3]}
        />
        <FormCheckBox
          form={form}
          registerName="extraFuelOptions"
          registerString={extraFuelOptions[4]}
        />
        <FormCheckBox
          form={form}
          registerName="extraFuelOptions"
          registerString={extraFuelOptions[5]}
        />
      </div>
      <div>
        <CardDescription className="mb-2">Emission class</CardDescription>
        <FormSelect
          control={form.control}
          name="emissionClass"
          placeholder="Emission class"
          defaultValues={emissionClass}
        />
      </div>
    </div>
  );
}
