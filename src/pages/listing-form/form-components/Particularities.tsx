import { CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type ParticularitiesProps = {
  form: any;
};

export function Particularities({ form }: ParticularitiesProps) {
  return (
    <div className="space-y-4 relative">
      <CardTitle className="mb-6 font-normal text-xl">Description</CardTitle>
      <Textarea
        className="w-full h-[300px]"
        placeholder="Description"
        {...form.register("description")}
      />
      <p className="absolute bottom-0 right-4 text-sm">1000 tekens</p>
    </div>
  );
}
