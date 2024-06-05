import { FormSelect } from "@/components/form-elements";
import { CardTitle } from "@/components/ui/card";
import { transmission, power } from "@/lib/data";

type EngineProps = {
  form: any;
};

export function Engine({ form }: EngineProps) {
  return (
    <div className="space-y-4 border-b">
      <CardTitle className="mb-6 font-normal text-xl">Transmission</CardTitle>
      <FormSelect
        control={form.control}
        name="transmission"
        placeholder="Transmission"
        defaultValues={transmission}
      />
      <FormSelect
        control={form.control}
        name="power"
        placeholder="Power"
        defaultValues={power}
      />
    </div>
  );
}
