import { Input } from "../components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Fragment } from "react/jsx-runtime";
import { Checkbox } from "./ui/checkbox";

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
  typeInput?: string;
  readOnly?: boolean;
};

export function FormInput({
  control,
  registerName,
  registerString,
  typeInput,
  readOnly,
}: FormInputProps) {
  return (
    <>
      <FormField
        control={control}
        name={registerName}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                readOnly={readOnly}
                type={typeInput || "text"}
                placeholder={registerString}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

type formRadioProps = {
  form: any;
  defaultValues: string[];
  registerName: string;
  className?: string;
};

export function FormRadio({
  form,
  defaultValues,
  registerName,
  className,
}: formRadioProps) {
  return (
    <>
      <FormField
        control={form.control}
        name={registerName}
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className={className ? className : "grid grid-cols-2 gap-4"}
              >
                {defaultValues.map((defaultValue: string) => (
                  <Fragment key={defaultValue}>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          key={defaultValue}
                          value={defaultValue}
                          className="w-6 h-6 border-double"
                        />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {defaultValue}
                      </FormLabel>
                    </FormItem>
                  </Fragment>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}

type FormCheckBoxProps = {
  form: any;
  registerName: string;
  registerString: string;
};

export function FormCheckBox({
  form,
  registerName,
  registerString,
}: FormCheckBoxProps) {
  return (
    <>
      <FormField
        control={form.control}
        name={registerName}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md">
            <FormControl className="w-6 h-6">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel className="font-normal">{registerString}</FormLabel>
            </div>
          </FormItem>
        )}
      />
    </>
  );
}
