import { FormInput, FormRadio, FormCheckBox } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { colors, upholstery } from "@/lib/data";

type CharacteristicsProps = {
  form: any;
};

export function Characteristics({ form }: CharacteristicsProps) {
  return (
    <div className="space-y-4">
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
        <FormRadio form={form} defaultValues={colors} registerName="color" />
      </div>
      <div>
        <div className="py-4">
          <FormCheckBox
            form={form}
            registerName="metallic"
            registerString="Metallic"
          />
        </div>
      </div>
      <div>
        <CardDescription className="mb-2">Upholstery</CardDescription>
        <FormRadio
          form={form}
          defaultValues={upholstery}
          registerName="upholstery"
        />
      </div>
      <div>
        <CardDescription className="mb-2">Interior Color</CardDescription>
        <FormRadio form={form} defaultValues={colors} registerName="interior" />
      </div>
    </div>
  );
}
