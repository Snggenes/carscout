import { CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type ParticularitiesProps = {
  form: any;
};

export function Particularities({ form }: ParticularitiesProps) {
  return (
    <div className="space-y-4 border-b">
      <CardTitle className="mb-6">Description</CardTitle>
      <Textarea
        className="w-full"
        placeholder="Description"
        {...form.register("description")}
      />
    </div>
  );
}
