import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RegisterFormSchema } from "../../lib/types/models";
import { Form } from "../../components/ui/form";

import { useUser } from "../../contexts/userContext";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
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

  const onSuccess = async (data: any) => {
    if (data.error) {
      return toast.error(data.error);
    }
    toast.success(data.message);
    navigate("/login");
    form.reset();
  };

  const { performFetch } = useFetch("auth/register", onSuccess);

  const onSubmit = async (data: FieldValues) => {
    await performFetch({
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-col items-center gap-2 md:gap-8 lg:gap-14">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Enter your credentials to register</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 flex flex-col gap-2 w-[424px]"
          >
            <Form {...form}>
              <FormInput
                control={form.control}
                registerName="username"
                registerString="Username"
              />
              <FormInput
                control={form.control}
                registerName="email"
                registerString="Email"
              />
              <FormInput
                control={form.control}
                registerName="password"
                registerString="Password"
              />
            </Form>
            <Button variant="ghost" disabled={form.formState.isSubmitting}>
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
