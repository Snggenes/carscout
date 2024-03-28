import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Navbar } from "@/components/navbar/Navbar";
import { useUser } from "../../contexts/userContext";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

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

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const postData = await response.json();
    console.log(postData);
    setUser(null);
    reset();
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 border flex flex-col gap-2 w-[424px]"
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
      </div>
    </>
  );
}
