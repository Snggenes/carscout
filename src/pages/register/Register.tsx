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
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { FormInput } from "@/components/form-elements";
import { registerDefaultValues } from "@/lib/types/defaultValues";

export default function Register() {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.username) {
      toast.info("You are already logged in");
      navigate("/");
    }
  });

  const onSubmit = async (data: FieldValues) => {
    const res = await fetch(`/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const resData = await res.json();
    if (resData.error) {
      return toast.error(resData.error);
    }
    toast.success(resData.message);
    navigate("/login");
    form.reset();
  };

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: registerDefaultValues,
  });

  return (
    <div className="pt-16 w-full h-screen flex flex-col items-center justify-center">
      <Card className="w-full p-2 md:w-1/2 lg:w-5/12 xl:w-1/3 2xl:w-1/4 lg:p-0 h-full md:h-2/3 shadow-2xl">
        <CardHeader>
          <CardTitle className="mb-2">Register</CardTitle>
          <CardDescription>Enter your credentials to register</CardDescription>
        </CardHeader>
        <CardContent className="mb-0 pb-0">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 flex flex-col gap-4"
          >
            <Form {...form}>
              <div className="flex flex-col gap-2">
                <Label className="pl-2">Username</Label>
                <FormInput
                  control={form.control}
                  registerName="username"
                  registerString="Username"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="pl-2">Email</Label>
                <FormInput
                  control={form.control}
                  registerName="email"
                  registerString="Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="pl-2">Password</Label>
                <FormInput
                  control={form.control}
                  registerName="password"
                  registerString="Password"
                  typeInput="password"
                />
              </div>
            </Form>
            <Button variant="ghost" disabled={form.formState.isSubmitting}>
              Register
            </Button>
          </form>
        </CardContent>
        <CardFooter className="pt-0 mt-0 flex flex-row items-center justify-center">
          <p>Already have an account? </p>
          <Button variant="link" onClick={() => navigate("/login")}>
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
