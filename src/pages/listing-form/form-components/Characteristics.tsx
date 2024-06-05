import { FormSelect } from "@/components/form-elements";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { body, seats, doors, colors, upholstery } from "@/lib/data";

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
        <FormSelect
          control={form.control}
          name="body"
          placeholder="Body"
          defaultValues={body}
        />
      </div>
      <div>
        <CardDescription>Seats</CardDescription>
        <FormSelect
          control={form.control}
          name="seat"
          placeholder="Seats"
          defaultValues={seats}
        />
      </div>
      <div>
        <CardDescription>Doors</CardDescription>
        <FormSelect
          control={form.control}
          name="door"
          placeholder="Doors"
          defaultValues={doors}
        />
      </div>
      <div>
        <CardDescription>Color</CardDescription>
        <FormSelect
          control={form.control}
          name="color"
          placeholder="Color"
          defaultValues={colors}
        />
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
