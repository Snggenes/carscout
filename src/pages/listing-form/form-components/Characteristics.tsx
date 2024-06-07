import { FormInput, FormSelect, FormRadio } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { colors, upholstery } from "@/lib/data";

type CharacteristicsProps = {
  form: any;
};

export function Characteristics({ form }: CharacteristicsProps) {
  return (
    <div className="space-y-4 border-b">
      <CardTitle className="mb-6 font-normal text-xl">
        Characteristics
      </CardTitle>
      <div>
        <CardDescription>Body</CardDescription>

        <FormInput
          control={form.control}
          registerName="body"
          registerString="Body"
        />
      </div>
      <div>
        <CardDescription>Seats</CardDescription>

        <FormInput
          control={form.control}
          registerName="seat"
          registerString="Seats"
        />
      </div>
      <div>
        <CardDescription>Doors</CardDescription>

        <FormInput
          control={form.control}
          registerName="door"
          registerString="Doors"
        />
      </div>
      <div>
        <CardDescription className="mb-2">Color</CardDescription>
        <FormRadio form={form} defaultValues={colors} registerName="color"/>
      </div>
      <div>
        <CardDescription>Upholstery</CardDescription>
        <FormSelect
          control={form.control}
          name="upholstery"
          placeholder="Upholstery"
          defaultValues={upholstery}
        />
      </div>
    </div>
  );
}
