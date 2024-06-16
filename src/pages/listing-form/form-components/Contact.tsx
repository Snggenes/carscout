import { FormInput, FormCheckBox } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";

type ContactProps = {
  form: any;
};

export function Contact({ form }: ContactProps) {
  return (
    <div className="space-y-4 border-b">
      <CardTitle className="mb-2 font-normal text-xl">Contact</CardTitle>
      <p className="mb-1">Location of the car</p>
      <p className="font-semibold">
        This way, interested parties can find your car by using the search
        function.
      </p>

      <div className="flex flex-row gap-2 w-2/3 py-4">
        <div className="flex-flex-col gap-1">
          <p className="pl-2">Postcode</p>
          <FormInput
            control={form.control}
            registerName="postcode"
            registerString="Postcode"
          />
          <p className="text-sm text-red-500 pl-2">Please verify</p>
        </div>
        <div className="flex-flex-col gap-1">
          <p className="pl-2">House number</p>

          <FormInput
            control={form.control}
            registerName="houseNumber"
            registerString="House Number"
          />
          <p className="text-sm text-red-500 pl-2">Please verify</p>
        </div>
      </div>
      <p className="font-semibold pb-2">
        This makes it even easier for interested parties to contact you with
        questions and to make an appointment.
      </p>
      <div className="">
        <CardDescription className="mb-1">Phone</CardDescription>
        <FormInput
          control={form.control}
          registerName="phone"
          registerString="Phone"
        />
      </div>
      <p>Add a contact option to the ad?</p>
      <div className="flex flex-row gap-12 pb-12">
        <FormCheckBox
          form={form}
          registerName="contactOption"
          registerString="Yes"
        />
        <FormCheckBox
          form={form}
          registerName="contactOption"
          registerString="No"
        />
      </div>
    </div>
  );
}
