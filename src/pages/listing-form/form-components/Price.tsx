import { FormCheckBox, FormInput } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";

type PriceProps = {
  form: any;
};

export function Price({ form }: PriceProps) {
  return (
    <div className="space-y-4">
      <CardTitle className="mb-6 font-normal text-xl">Price</CardTitle>
      <div>
        <CardDescription className="mb-1">Price</CardDescription>
        <FormInput
          control={form.control}
          registerName="price"
          registerString="Please enter"
          typeInput="number"
        />
      </div>
      <div>
        <FormCheckBox
          form={form}
          registerName="negotiable"
          registerString="Negotiable"
        />
      </div>
      <div>
        <FormCheckBox
          form={form}
          registerName="taxdeductible"
          registerString="Tax deductible"
        />
      </div>
      <p className="text-sm font-light">Required field</p>
    </div>
  );
}
