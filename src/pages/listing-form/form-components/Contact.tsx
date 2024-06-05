import { FormInput } from "@/components/form-elements";
import { CardTitle } from "@/components/ui/card";

type ContactProps = {
  form: any;
};

export function Contact({ form }: ContactProps) {
  return (
    <div className="space-y-4 border-b">
      <CardTitle className="mb-6 font-normal text-xl">Contact</CardTitle>

      <FormInput
        control={form.control}
        registerName="postcode"
        registerString="Postcode"
      />
      <FormInput
        control={form.control}
        registerName="phone"
        registerString="Phone"
      />
      <FormInput
        control={form.control}
        registerName="houseNumber"
        registerString="House Number"
      />
    </div>
  );
}
