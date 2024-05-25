import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from "../../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
import { toast } from "react-toastify";
import { FormInput } from "@/components/form-elements";
import { LoginFormSchema } from "../../lib/types/models";

export default function Login() {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user?.username) {
      if (location.state) {
        navigate(location.state.from);
      } else {
        navigate("/");
      }
    }
  });

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const res = await fetch(`/api/auth/login`, {
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
    setUser(null);
    toast.success(resData.message);
    form.reset();
  };

  return (
    <div className="pt-16 w-full h-screen flex flex-col items-center justify-center">
      <Card className="w-full p-2 md:w-1/2 xl:w-1/3 lg:p-0 h-full md:h-2/3">
        <CardHeader>
          <CardTitle className="mb-2">Login</CardTitle>
          <CardDescription>Enter your credentials to login</CardDescription>
        </CardHeader>
        <CardContent className="mb-0 pb-0">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="p-4 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <Label className="pl-2">Email</Label>
                <FormInput
                  control={form.control}
                  registerName="email"
                  registerString="123@mail.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="pl-2">Password</Label>

                <FormInput
                  control={form.control}
                  registerName="password"
                  registerString="************"
                  typeInput="password"
                />
              </div>
              <Button variant="ghost" disabled={form.formState.isSubmitting}>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="pt-0 mt-0 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-4 items-center cursor-pointer">
            <div className="flex flw-row items-center gap-2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s"
                alt=""
                width={30}
                height={10}
              />
              <p className=" font-normal">Login with google</p>
            </div>
            <div className="flex flw-row items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
                alt=""
                width={25}
                height={10}
              />
              <p className=" font-normal">Login with github</p>
            </div>
            <div className="flex flex-row items-center gap-0 pt-4">
              <p>Don't have an account? </p>
              <Button variant="link" onClick={() => navigate("/register")}>
                Register
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
