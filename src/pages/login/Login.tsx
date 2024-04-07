import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
import { toast } from "react-toastify";
import useFetch from "@/hooks/useFetch";

export default function Login() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username) {
      navigate("/");
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSuccess = async (data: any) => {
    console.log(data);
    setUser(null);
    toast.success("You are now logged in");
    reset();
  };

  const { performFetch } = useFetch("auth/login", onSuccess);

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
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to login</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 flex flex-col gap-2 w-[424px]"
          >
            <Input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="Email"
            />
            {errors.email && <p>{`${errors.email.message}`}</p>}
            <Input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
            />
            {errors.password && <p>{`${errors.password.message}`}</p>}

            <Button variant="ghost" disabled={isSubmitting}>
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-row items-center justify-center">
          <p>Don't have an account? </p>
          <Button variant="link" onClick={() => navigate("/register")}>
            Register
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
