import { Input } from "../../components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";

type FormInputProps = {
  register: any;
  errors: any;
  registerName: string;
  registerString: string;
  typeInput?: string;
};

export function FormInput({
  register,
  errors,
  registerName,
  registerString,
  typeInput,
}: FormInputProps) {
  return (
    <>
      <Input
        {...register(registerName, {
          required: `${registerString} is required`,
        })}
        type={typeInput ? typeInput : "text"}
        placeholder={registerString}
      />
      {errors[registerName] && <p>{errors[registerName].message}</p>}
    </>
  );
}

type FormSelectProps = {
  control: any;
  name: string;
  placeholder: string;
  defaultValues: any;
  defaultValue?: any;
};

export function FormSelect({
  control,
  name,
  placeholder,
  defaultValues,
  defaultValue,
}: FormSelectProps) {
  
  let fieldValue: any;
  const keys = Object.keys(defaultValue);
  if (keys.includes(name)) {
    fieldValue = defaultValue[name];
  }

  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={field.onChange} defaultValue={fieldValue}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {defaultValues.map((defaultValue: any) => (
                  <SelectItem key={defaultValue} value={defaultValue}>
                    {defaultValue}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
