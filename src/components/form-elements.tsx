import { Input } from "../components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// type FormInputProps = {
//   register: any;
//   errors: any;
//   registerName: string;
//   registerString: string;
//   typeInput?: string;
//   minLenght?: number;
//   maxLength?: number;
//   disabled?: boolean;
// };

// export function FormInput({
//   register,
//   errors,
//   registerName,
//   registerString,
//   typeInput,
//   minLenght,
//   maxLength,
//   disabled,
// }: FormInputProps) {
//   return (
//     <>
//       <Input
//         {...register(registerName, {
//           required: `${registerString} is required`,
//           minLength: {
//             value: minLenght ? minLenght : 2,
//             message: `${registerString} should have at least ${minLenght? minLenght : 2} characters`,
//           },
//           maxLength: {
//             value: maxLength ? maxLength : 50,
//             message: `${registerString} should have at most ${maxLength} characters`,
//           },
//         })}
//         type={typeInput ? typeInput : "text"}
//         disabled={disabled}
//         placeholder={registerString}
//       />
//       {errors[registerName] && <p>{errors[registerName].message}</p>}
//     </>
//   );
// }

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
}: FormSelectProps) {
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
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

type FormInputProps = {
  control: any;
  registerName: string;
  registerString: string;
};


export function FormInput({ control, registerName, registerString }: FormInputProps) {
  return (
    <>
      <FormField
        control={control}
        name={registerName}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder={registerString} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
