import { FormSelect } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { prices } from "@/lib/data";

type PriceProps = {
  form: any;
};

export function Price({ form }: PriceProps) {
  return (
    <div className="space-y-4 border-b">
      <CardTitle className="mb-6 font-normal text-xl">Price</CardTitle>
      <div>
        <CardDescription>Price</CardDescription>
        <FormSelect
          control={form.control}
          name="price"
          placeholder="Price"
          defaultValues={prices}
        />
      </div>
    </div>
  );
}
