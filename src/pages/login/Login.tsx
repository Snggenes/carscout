import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form } from "../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
import { toast } from "react-toastify";
import useFetch from "@/hooks/useFetch";
import { FormInput } from "@/components/form-elements";
import { LoginFormSchema } from "../../lib/types/models";

export default function Login() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username) {
      navigate("/");
    }
  });

  const onSuccess = async (data: any) => {
    if (data.error) {
      return toast.error(data.error);
    }
    setUser(null);
    toast.success(data.message);
    form.reset();
  };

  const { performFetch } = useFetch("auth/login", onSuccess);

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-4 flex flex-col gap-2 w-[424px]"
            >
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
              <Button variant="ghost" disabled={form.formState.isSubmitting}>
                Login
              </Button>
            </form>
          </Form>
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
