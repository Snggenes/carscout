import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useUser } from "../../contexts/userContext";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { FormInput } from "@/components/form-elements";

import useFetch from "@/hooks/useFetch";

export default function Register() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username) {
      toast("You are already logged in");
      navigate("/");
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSuccess = async (data: any) => {
    console.log(data);
    toast.success("You are now registered");
    navigate("/login");
    reset();
  };

  const { performFetch } = useFetch("auth/register", onSuccess);

  const onSubmit = async (data: FieldValues) => {
    await performFetch({
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="flex flex-col items-center gap-2 md:gap-8 lg:gap-14">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Enter your credentials to register</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 flex flex-col gap-2 w-[424px]"
          >
            <FormInput
              register={register}
              errors={errors}
              registerName="username"
              registerString="Username"
            />
            <FormInput
              register={register}
              errors={errors}
              registerName="email"
              registerString="Email"
              typeInput="email"
            />
            <FormInput
              register={register}
              errors={errors}
              registerName="password"
              registerString="Password"
              typeInput="password"
            />
            
            <Input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match",
              })}
              type="password"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <p>{`${errors.confirmPassword.message}`}</p>
            )}
            <Button variant="ghost" disabled={isSubmitting}>
              Register
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row items-center justify-center">
          <p>Already have an account? </p>
          <Button variant="link" onClick={() => navigate("/register")}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
